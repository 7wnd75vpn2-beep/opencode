import { describe, expect, test } from "vitest"
import { QUESTIONS } from "../data/questions"
import { confidenceGroups, insights, priorities, reviewQueue, tally } from "./analysis"
import { BANK, BANK_BY_ID, validateBank } from "./bank"
import {
  checkAnswer,
  createSession,
  displayLetter,
  finishSession,
  pickBalanced,
  selectAnswer,
  setConfidence,
  remainingMs,
  tick,
  toggleMark,
  toggleStrike,
} from "./session"
import { blockOf, byBlock, pickExam } from "./exam"
import { emptyState, exportState, importState, loadState, parseState, saveState, STORAGE_KEY } from "./storage"
import { DISCIPLINES, LETTERS, type Letter, type Question, type Session } from "./types"

const DAY = 24 * 60 * 60 * 1000

function seeded(seed: number) {
  let value = seed
  return () => {
    value = (value * 16807) % 2147483647
    return (value - 1) / 2147483646
  }
}

function wrongLetter(question: Question): Letter {
  return LETTERS.find((letter) => letter !== question.correta) ?? "A"
}

function sessionWith(count: number, seed = 1) {
  return createSession({
    mode: "simulado",
    title: "Teste",
    questions: BANK.slice(0, count),
    seen: new Set(),
    now: 1_000,
    random: seeded(seed),
  })
}

function question(session: Session, index: number) {
  const item = session.items[index]
  const found = item && BANK_BY_ID.get(item.questionId)
  if (!found) throw new Error("questão ausente")
  return found
}

class MemoryStorage implements Storage {
  data = new Map<string, string>()
  get length() {
    return this.data.size
  }
  clear() {
    this.data.clear()
  }
  getItem(key: string) {
    return this.data.get(key) ?? null
  }
  key(index: number) {
    return [...this.data.keys()][index] ?? null
  }
  removeItem(key: string) {
    this.data.delete(key)
  }
  setItem(key: string, value: string) {
    this.data.set(key, value)
  }
}

describe("banco de questões", () => {
  test("o banco inteiro passa na validação e cobre todas as matérias", () => {
    expect(QUESTIONS.length).toBeGreaterThanOrEqual(250)
    expect(validateBank(QUESTIONS).issues).toEqual([])
    expect(BANK).toHaveLength(QUESTIONS.length)
    DISCIPLINES.forEach((discipline) => expect(BANK.some((q) => q.disciplina === discipline), discipline).toBe(true))
  })

  test("trava: alternativa correta muito mais longa que as demais é bloqueada", () => {
    const sample = QUESTIONS[0] as Question
    const giveaway: Question = {
      ...sample,
      id: "x-longa",
      alternativas: {
        ...sample.alternativas,
        [sample.correta]: { text: "x".repeat(400), why: "Correta." },
      },
    }
    expect(validateBank([giveaway]).issues.map((issue) => issue.problem)).toContain("alternativa correta muito mais longa que as demais")
  })

  test("questões inválidas ficam fora das sessões", () => {
    const sample = QUESTIONS[0] as Question
    const broken: Question[] = [
      { ...sample, id: "x-dup" },
      { ...sample, id: "x-dup" },
      { ...sample, id: "x-draft", status: "rascunho" },
      { ...sample, id: "x-alt", alternativas: { ...sample.alternativas, B: { text: "", why: "" } } },
      { ...sample, id: "x-same", alternativas: { ...sample.alternativas, C: sample.alternativas.A } },
    ]
    const result = validateBank(broken)
    expect(result.valid.map((q) => q.id)).toEqual(["x-dup"])
    expect(result.issues.map((issue) => issue.problem)).toEqual(
      expect.arrayContaining(["id duplicado", "questão em rascunho", "alternativa sem texto ou sem justificativa", "alternativas repetidas"]),
    )
  })
})

describe("sessão", () => {
  test("embaralhar alternativas preserva o gabarito", () => {
    const session = sessionWith(BANK.length, 7)
    session.items.forEach((item, index) => {
      const q = question(session, index)
      expect([...item.order].sort()).toEqual([...LETTERS])
      const shown = displayLetter(item, q.correta)
      expect(item.order[LETTERS.indexOf(shown)]).toBe(q.correta)
    })
    const answered = session.items.reduce((current, _, index) => selectAnswer(current, index, question(current, index).correta), session)
    const result = finishSession({ session: answered, bank: BANK_BY_ID, now: 2_000, elapsedMs: 1_000 })
    expect(tally(result.attempts).correct).toBe(BANK.length)
  })

  test("nunca repete questões e não completa a quantidade com repetidas", () => {
    const picked = pickBalanced(BANK, 500, new Set(), seeded(3))
    expect(picked).toHaveLength(BANK.length)
    expect(new Set(picked.map((q) => q.id)).size).toBe(BANK.length)
    const duplicated = createSession({ mode: "treino", title: "", questions: [BANK[0] as Question, BANK[0] as Question], seen: new Set(), now: 1 })
    expect(duplicated.items).toHaveLength(1)
  })

  test("diagnóstico equilibrado prefere questões inéditas", () => {
    // Deixa só 2 inéditas em Penal: o diagnóstico ainda deve pegar 2 por matéria, todas inéditas.
    const seen = new Set(BANK.filter((q) => q.disciplina === "Direito Penal").slice(2).map((q) => q.id))
    const picked = pickBalanced(BANK, 12, seen, seeded(5))
    expect(new Set(picked.map((q) => q.disciplina)).size).toBe(DISCIPLINES.length)
    expect(picked.filter((q) => seen.has(q.id))).toEqual([])
  })

  test("trocar alternativa mantém só a última escolha; treino bloqueia após conferir", () => {
    const base = createSession({ mode: "treino", title: "", questions: BANK.slice(0, 2), seen: new Set(), now: 1, random: seeded(2) })
    const q = question(base, 0)
    const changed = selectAnswer(selectAnswer(base, 0, wrongLetter(q)), 0, q.correta)
    expect(changed.items[0]?.answer).toBe(q.correta)
    const locked = checkAnswer(changed, 0)
    expect(locked.items[0]?.checked).toBe(true)
    expect(selectAnswer(locked, 0, wrongLetter(q)).items[0]?.answer).toBe(q.correta)
    expect(setConfidence(locked, 0, "chute").items[0]?.confidence).toBeUndefined()
    expect(checkAnswer(base, 1).items[1]?.checked).toBe(false)
  })

  test("simulado não confere respostas antes do fim", () => {
    const session = selectAnswer(sessionWith(3), 0, "A")
    expect(checkAnswer(session, 0).items[0]?.checked).toBe(false)
  })

  test("acertos, erros e brancos", () => {
    const session = sessionWith(5)
    const answered = [
      (s: Session) => selectAnswer(s, 0, question(s, 0).correta),
      (s: Session) => selectAnswer(s, 1, question(s, 1).correta),
      (s: Session) => selectAnswer(s, 2, wrongLetter(question(s, 2))),
    ].reduce((current, step) => step(current), session)
    const result = finishSession({ session: answered, bank: BANK_BY_ID, now: 2, elapsedMs: 0 })
    expect(tally(result.attempts)).toMatchObject({ total: 5, correct: 2, wrong: 1, blank: 2, points: 2 })
  })
})

describe("confiança e revisão", () => {
  function played() {
    const session = sessionWith(6)
    const steps: ((s: Session) => Session)[] = [
      (s) => setConfidence(selectAnswer(s, 0, question(s, 0).correta), 0, "certeza"),
      (s) => setConfidence(selectAnswer(s, 1, question(s, 1).correta), 1, "duvida"),
      (s) => setConfidence(selectAnswer(s, 2, wrongLetter(question(s, 2))), 2, "certeza"),
      (s) => setConfidence(selectAnswer(s, 3, wrongLetter(question(s, 3))), 3, "chute"),
      (s) => toggleMark(selectAnswer(s, 4, question(s, 4).correta), 4),
    ]
    return finishSession({ session: steps.reduce((current, step) => step(current), session), bank: BANK_BY_ID, now: 50, elapsedMs: 0 })
  }

  test("classifica os quatro grupos sem supor confiança ausente", () => {
    const groups = confidenceGroups(played().attempts)
    expect(groups.firme).toHaveLength(1)
    expect(groups.confirmar).toHaveLength(1)
    expect(groups.prioritario).toHaveLength(1)
    expect(groups.reforcar).toHaveLength(1)
    expect(groups["sem-confianca"]).toHaveLength(1)
    expect(groups.branco).toHaveLength(1)
  })

  test("revisão espaçada: erros vencem já, acertos inseguros amanhã, acerto com certeza em uma semana", () => {
    const result = played()
    const ids = result.attempts.map((attempt) => attempt.questionId)
    const now = reviewQueue([result], 50)
    expect(now[0]?.questionId).toBe(ids[2])
    expect(now.map((item) => item.questionId).sort()).toEqual([ids[2], ids[3], ids[4], ids[5]].sort())
    expect(reviewQueue([result], 50 + 2 * DAY).map((item) => item.questionId)).toContain(ids[1])
    expect(reviewQueue([result], 50 + 6 * DAY).map((item) => item.questionId)).not.toContain(ids[0])
    expect(reviewQueue([result], 50 + 8 * DAY).map((item) => item.questionId)).toContain(ids[0])
  })

  test("a tentativa mais recente decide se a questão segue pendente", () => {
    const first = played()
    const id = first.attempts[2]?.questionId as string
    const q = BANK_BY_ID.get(id) as Question
    const retry = createSession({ mode: "revisao", title: "", questions: [q], seen: new Set([id]), now: 60 })
    const solved = finishSession({
      session: setConfidence(selectAnswer(retry, 0, q.correta), 0, "certeza"),
      bank: BANK_BY_ID,
      now: 70,
      elapsedMs: 0,
    })
    expect(solved.attempts[0]?.repeat).toBe(true)
    expect(reviewQueue([first, solved], 70).map((item) => item.questionId)).not.toContain(id)
    // Acertou na revisão, mas volta em um dia para confirmar: repetição não é domínio comprovado.
    expect(reviewQueue([first, solved], 70 + 2 * DAY).map((item) => item.questionId)).toContain(id)
  })

  test("textos de análise usam os números reais", () => {
    const lines = insights(played().attempts)
    expect(lines[0]).toBe("Você acertou 3 de 6 questões, mas indicou dúvida ou chute em 1 desses acertos.")
    expect(priorities(played().attempts)[0]?.reason).toContain("marcou confiança alta")
  })
})

describe("simulado PC-PE", () => {
  test("monta 20 questões de Noções de Direito e 40 de Conhecimentos Específicos, sem repetir", () => {
    const picked = pickExam(BANK, new Set(), seeded(11))
    expect(picked).toHaveLength(60)
    expect(new Set(picked.map((q) => q.id)).size).toBe(60)
    expect(picked.filter((q) => blockOf(q.disciplina) === "P1")).toHaveLength(20)
    expect(picked.filter((q) => blockOf(q.disciplina) === "P2")).toHaveLength(40)
  })

  test("o prazo é um horário real e o resultado registra o tempo esgotado", () => {
    const session = createSession({ mode: "prova", title: "", questions: BANK.slice(0, 3), seen: new Set(), now: 1_000, limitMs: 60_000 })
    expect(session.deadline).toBe(61_000)
    expect(remainingMs(session, 31_000)).toBe(30_000)
    expect(remainingMs(session, 99_000)).toBe(0)
    const result = finishSession({ session, bank: BANK_BY_ID, now: 61_000, elapsedMs: 60_000, timedOut: true })
    expect(result.timedOut).toBe(true)
    expect(tally(result.attempts).blank).toBe(3)
  })

  test("riscar alternativa e tempo por questão", () => {
    const session = sessionWith(2)
    const struck = toggleStrike(toggleStrike(session, 0, "A"), 0, "B")
    expect(struck.items[0]?.struck).toEqual(["A", "B"])
    expect(toggleStrike(struck, 0, "A").items[0]?.struck).toEqual(["B"])
    const ticked = tick(tick(session, 1000), 1000)
    expect(ticked.items[0]?.timeMs).toBe(2000)
    expect(ticked.elapsedMs).toBe(2000)
    const result = finishSession({ session: ticked, bank: BANK_BY_ID, now: 5, elapsedMs: 2000 })
    expect(result.attempts[0]?.timeMs).toBe(2000)
    expect(byBlock(result.attempts).reduce((sum, block) => sum + block.total, 0)).toBe(2)
  })
})

describe("persistência", () => {
  test("progresso salvo pela versão anterior continua válido", () => {
    const legacy = {
      version: 1,
      history: [
        {
          id: "s-old",
          mode: "simulado",
          title: "Antigo",
          startedAt: 1,
          finishedAt: 2,
          durationMs: 1,
          attempts: [{ questionId: "lp-crase-01", disciplina: "Língua Portuguesa", tema: "Crase", correct: true, answer: "A", marked: false, repeat: false }],
          items: [{ questionId: "lp-crase-01", order: ["A", "B", "C", "D", "E"], answer: "A", marked: false, checked: false, repeat: false }],
        },
      ],
      flags: [],
      preferences: { weeklyGoal: 60, introSeen: true },
    }
    expect(parseState(legacy)?.history).toHaveLength(1)
  })

  test("salva, recarrega e retoma sessão em andamento", () => {
    const storage = new MemoryStorage()
    const state = { ...emptyState(), active: selectAnswer(sessionWith(4), 1, "C") }
    expect(saveState(storage, state)).toBe(true)
    const loaded = loadState(storage)
    expect(loaded.notice).toBeUndefined()
    expect(loaded.state.active?.items[1]?.answer).toBe("C")
  })

  test("dados corrompidos não quebram o app e são guardados", () => {
    const storage = new MemoryStorage()
    storage.setItem(STORAGE_KEY, "{quebrado")
    const loaded = loadState(storage)
    expect(loaded.state).toEqual(emptyState())
    expect(loaded.notice).toBeDefined()
    expect(storage.getItem(`${STORAGE_KEY}:corrompido`)).toBe("{quebrado")
  })

  test("armazenamento bloqueado é tratado", () => {
    const blocked = new MemoryStorage()
    blocked.getItem = () => {
      throw new Error("SecurityError")
    }
    expect(loadState(blocked).notice).toBeDefined()
    expect(loadState(undefined).notice).toBeDefined()
  })

  test("exporta e importa com validação", () => {
    const state = { ...emptyState(), history: [finishSession({ session: sessionWith(3), bank: BANK_BY_ID, now: 9, elapsedMs: 5 })] }
    const imported = importState(exportState(state, 0))
    expect("state" in imported && imported.state).toEqual(state)
    expect(importState("{}")).toHaveProperty("error")
    expect(importState("não é json")).toHaveProperty("error")
    const tampered = JSON.parse(exportState(state, 0))
    tampered.state.history[0].attempts[0].answer = "Z"
    expect(importState(JSON.stringify(tampered))).toHaveProperty("error")
    expect(parseState({ ...state, version: 2 })).toBeUndefined()
  })
})
