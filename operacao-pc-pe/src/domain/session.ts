import {
  DISCIPLINES,
  LETTERS,
  type Attempt,
  type Confidence,
  type Discipline,
  type Letter,
  type Mode,
  type Question,
  type Session,
  type SessionItem,
  type SessionResult,
} from "./types"

export type Random = () => number

export const MODE_LABEL: Record<Mode, string> = {
  diagnostico: "Diagnóstico",
  treino: "Treino dirigido",
  simulado: "Simulado",
  prova: "Simulado PC-PE",
  revisao: "Revisão dos pontos fracos",
}

/** No treino e na revisão, a correção aparece ao confirmar cada questão. */
export function correctsImmediately(mode: Mode) {
  return mode === "treino" || mode === "revisao"
}

export const DIAGNOSTIC_SIZE = 10
/** Estimativa usada apenas para informar o aluno antes de começar. */
export const SECONDS_PER_QUESTION = 120

export function shuffle<T>(values: readonly T[], random: Random = Math.random) {
  const copy = [...values]
  for (let index = copy.length - 1; index > 0; index--) {
    const target = Math.floor(random() * (index + 1))
    const current = copy[index] as T
    copy[index] = copy[target] as T
    copy[target] = current
  }
  return copy
}

export function seenQuestionIds(history: SessionResult[]) {
  return new Set(history.flatMap((result) => result.attempts.map((attempt) => attempt.questionId)))
}

/**
 * Seleciona questões sem repetição, alternando entre disciplinas e preferindo as inéditas.
 * Se o banco não tiver o suficiente, devolve menos questões em vez de repetir.
 */
export function pickBalanced(pool: Question[], count: number, seen: Set<string>, random: Random = Math.random) {
  const groups = DISCIPLINES.map((discipline) => {
    const questions = shuffle(
      pool.filter((question) => question.disciplina === discipline),
      random,
    )
    return [...questions.filter((q) => !seen.has(q.id)), ...questions.filter((q) => seen.has(q.id))]
  }).filter((group) => group.length > 0)
  const roundOf = (round: number) =>
    groups.flatMap((group) => {
      const question = group[round]
      return question ? [question] : []
    })
  const longest = Math.max(0, ...groups.map((group) => group.length))
  const ordered = Array.from({ length: longest }, (_, round) => roundOf(round)).flat()
  return ordered.slice(0, Math.min(count, ordered.length))
}

export function createSession(input: {
  mode: Mode
  title: string
  questions: Question[]
  seen: Set<string>
  now: number
  random?: Random
  /** Tempo de prova; cria um horário-limite real. */
  limitMs?: number
}): Session {
  const random = input.random ?? Math.random
  const unique = [...new Map(input.questions.map((question) => [question.id, question])).values()]
  return {
    id: `s-${input.now.toString(36)}-${Math.floor(random() * 1e6).toString(36)}`,
    mode: input.mode,
    title: input.title,
    createdAt: input.now,
    items: unique.map((question) => ({
      questionId: question.id,
      order: shuffle(LETTERS, random),
      marked: false,
      checked: false,
      repeat: input.seen.has(question.id),
    })),
    current: 0,
    elapsedMs: 0,
    limitMs: input.limitMs,
    deadline: input.limitMs ? input.now + input.limitMs : undefined,
  }
}

export function displayLetter(item: SessionItem, original: Letter) {
  return LETTERS[item.order.indexOf(original)] ?? original
}

function updateItem(session: Session, index: number, change: (item: SessionItem) => SessionItem): Session {
  const item = session.items[index]
  if (!item) return session
  return { ...session, items: session.items.map((current, position) => (position === index ? change(current) : current)) }
}

export function selectAnswer(session: Session, index: number, answer: Letter) {
  return updateItem(session, index, (item) => (item.checked ? item : { ...item, answer }))
}

export function setConfidence(session: Session, index: number, confidence: Confidence | undefined) {
  return updateItem(session, index, (item) => (item.checked ? item : { ...item, confidence }))
}

export function toggleMark(session: Session, index: number) {
  return updateItem(session, index, (item) => ({ ...item, marked: !item.marked }))
}

/** Confere a resposta (treino/revisão). Depois disso a resposta fica bloqueada. */
export function checkAnswer(session: Session, index: number) {
  if (!correctsImmediately(session.mode)) return session
  return updateItem(session, index, (item) => (item.answer ? { ...item, checked: true } : item))
}

/** Risca ou desrisca uma alternativa, como se faz no caderno de prova. */
export function toggleStrike(session: Session, index: number, letter: Letter) {
  return updateItem(session, index, (item) => {
    if (item.checked) return item
    const struck = item.struck ?? []
    return { ...item, struck: struck.includes(letter) ? struck.filter((entry) => entry !== letter) : [...struck, letter] }
  })
}

/** Avança o relógio da sessão e o tempo da questão aberta. */
export function tick(session: Session, ms: number): Session {
  const ticked = updateItem(session, session.current, (item) => ({ ...item, timeMs: (item.timeMs ?? 0) + ms }))
  return { ...ticked, elapsedMs: session.elapsedMs + ms }
}

export function remainingMs(session: Session, now: number) {
  return session.deadline === undefined ? undefined : Math.max(0, session.deadline - now)
}

export function goTo(session: Session, index: number): Session {
  return { ...session, current: Math.max(0, Math.min(session.items.length - 1, index)) }
}

export function blankCount(session: Session) {
  return session.items.filter((item) => !item.answer).length
}

export function finishSession(input: {
  session: Session
  bank: Map<string, Question>
  now: number
  elapsedMs: number
  timedOut?: boolean
}): SessionResult {
  const items = input.session.items.filter((item) => input.bank.has(item.questionId))
  return {
    id: input.session.id,
    mode: input.session.mode,
    title: input.session.title,
    startedAt: input.session.createdAt,
    finishedAt: input.now,
    durationMs: input.elapsedMs,
    timedOut: input.timedOut || undefined,
    limitMs: input.session.limitMs,
    items,
    attempts: items.flatMap((item): Attempt[] => {
      const question = input.bank.get(item.questionId)
      if (!question) return []
      return [
        {
          questionId: item.questionId,
          disciplina: question.disciplina,
          tema: question.tema,
          answer: item.answer,
          correct: item.answer === question.correta,
          confidence: item.answer ? item.confidence : undefined,
          marked: item.marked,
          repeat: item.repeat,
          dificuldade: question.dificuldade,
          timeMs: item.timeMs,
        },
      ]
    }),
  }
}

export function disciplinesWithQuestions(bank: Question[]) {
  return DISCIPLINES.filter((discipline): discipline is Discipline => bank.some((q) => q.disciplina === discipline))
}
