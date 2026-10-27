import type { Attempt, Discipline, SessionResult } from "./types"

/** Abaixo destes números, o app avisa que a amostra é pequena para conclusões. */
export const SMALL_SESSION = 10
export const SMALL_DISCIPLINE = 3

export type ConfidenceGroup = "firme" | "confirmar" | "prioritario" | "reforcar" | "sem-confianca" | "branco"

export const GROUP_INFO: Record<ConfidenceGroup, { title: string; plain: string }> = {
  firme: {
    title: "Acertou com confiança",
    plain: "Você sabia e acertou. É o conhecimento mais firme desta sessão.",
  },
  confirmar: {
    title: "Acertou com dúvida ou chute",
    plain: "A resposta estava certa, mas você não tinha segurança. Vale confirmar antes de contar como aprendido.",
  },
  prioritario: {
    title: "Errou com confiança",
    plain: "Você tinha certeza e errou. Isso costuma indicar um conceito aprendido de forma errada — é a prioridade número um.",
  },
  reforcar: {
    title: "Errou com dúvida ou chute",
    plain: "Você já desconfiava que não sabia. É conteúdo a reforçar com calma.",
  },
  "sem-confianca": {
    title: "Respondidas sem indicar confiança",
    plain: "Você não informou a confiança. Essas questões contam no placar, mas ficam fora desta análise.",
  },
  branco: {
    title: "Em branco",
    plain: "Questões sem resposta. Contam como zero na pontuação de estudo.",
  },
}

export function groupOf(attempt: Attempt): ConfidenceGroup {
  if (!attempt.answer) return "branco"
  if (!attempt.confidence) return "sem-confianca"
  if (attempt.correct) return attempt.confidence === "certeza" ? "firme" : "confirmar"
  return attempt.confidence === "certeza" ? "prioritario" : "reforcar"
}

export function tally(attempts: Attempt[]) {
  const correct = attempts.filter((attempt) => attempt.correct).length
  const blank = attempts.filter((attempt) => !attempt.answer).length
  return {
    total: attempts.length,
    correct,
    blank,
    wrong: attempts.length - correct - blank,
    /** Pontuação de estudo: 1 por acerto, 0 por erro ou em branco. */
    points: correct,
    rate: attempts.length ? correct / attempts.length : 0,
  }
}

export function byDiscipline(attempts: Attempt[]) {
  const disciplines = [...new Set(attempts.map((attempt) => attempt.disciplina))]
  return disciplines.map((disciplina) => {
    const subset = attempts.filter((attempt) => attempt.disciplina === disciplina)
    return { disciplina, ...tally(subset), small: subset.length < SMALL_DISCIPLINE }
  })
}

export function confidenceGroups(attempts: Attempt[]) {
  const groups: Record<ConfidenceGroup, Attempt[]> = {
    firme: [],
    confirmar: [],
    prioritario: [],
    reforcar: [],
    "sem-confianca": [],
    branco: [],
  }
  attempts.forEach((attempt) => groups[groupOf(attempt)].push(attempt))
  return groups
}

/** Frases construídas somente a partir dos números da sessão. */
export function insights(attempts: Attempt[]) {
  const result = tally(attempts)
  const groups = confidenceGroups(attempts)
  const unsureHits = groups.confirmar.length
  const confidentMisses = groups.prioritario.length
  const rated = attempts.filter((attempt) => attempt.answer && attempt.confidence).length
  const lines: string[] = []
  if (result.total === 0) return lines
  lines.push(
    unsureHits > 0
      ? `Você acertou ${result.correct} de ${result.total} questões, mas indicou dúvida ou chute em ${unsureHits} desses acertos.`
      : `Você acertou ${result.correct} de ${result.total} questões.`,
  )
  if (confidentMisses > 0)
    lines.push(
      `Em ${confidentMisses} ${plural(confidentMisses, "questão", "questões")} você marcou “tenho certeza” e errou. ${plural(confidentMisses, "Ela vai", "Elas vão")} para o topo da sua revisão.`,
    )
  if (result.blank > 0)
    lines.push(`${result.blank} ${plural(result.blank, "questão ficou", "questões ficaram")} em branco e ${plural(result.blank, "conta", "contam")} como zero.`)
  if (rated === 0 && result.total - result.blank > 0)
    lines.push("Você não indicou confiança em nenhuma resposta, então a análise de confiança não pôde ser feita nesta sessão.")
  return lines
}

export type Priority = {
  disciplina: Discipline
  tema: string
  weight: number
  reason: string
  questionIds: string[]
}

/** Temas que merecem revisão, com o motivo explicado a partir das respostas. */
export function priorities(attempts: Attempt[]): Priority[] {
  const keys = [...new Set(attempts.map((attempt) => `${attempt.disciplina}§${attempt.tema}`))]
  return keys
    .map((key) => {
      const subset = attempts.filter((attempt) => `${attempt.disciplina}§${attempt.tema}` === key)
      const first = subset[0] as Attempt
      const wrong = subset.filter((attempt) => attempt.answer && !attempt.correct)
      const confidentWrong = wrong.filter((attempt) => attempt.confidence === "certeza").length
      const unsureRight = subset.filter((attempt) => attempt.correct && attempt.confidence && attempt.confidence !== "certeza").length
      const blank = subset.filter((attempt) => !attempt.answer).length
      const marked = subset.filter((attempt) => attempt.marked).length
      const weight = confidentWrong * 5 + (wrong.length - confidentWrong) * 4 + blank * 3 + unsureRight * 2 + marked
      const parts = [
        wrong.length > 0 &&
          `você errou ${wrong.length} ${plural(wrong.length, "questão", "questões")}${confidentWrong === 0 ? "" : wrong.length === 1 ? " e marcou confiança alta nela" : ` e marcou confiança alta em ${confidentWrong} delas`}`,
        blank > 0 && `deixou ${blank} em branco`,
        unsureRight > 0 && `acertou ${unsureRight} sem segurança`,
        marked > 0 && `marcou ${marked} para revisar`,
      ].filter((part): part is string => Boolean(part))
      return {
        disciplina: first.disciplina,
        tema: first.tema,
        weight,
        reason: parts.length ? `Revise este tema porque ${joinParts(parts)}.` : "",
        questionIds: subset
          .filter((attempt) => !attempt.correct || attempt.marked || (attempt.confidence && attempt.confidence !== "certeza"))
          .map((attempt) => attempt.questionId),
      }
    })
    .filter((priority) => priority.weight > 0)
    .sort((a, b) => b.weight - a.weight)
}

export type PendingReview = {
  questionId: string
  score: number
  reason: string
  lastSeen: number
  /** Caixa da revisão espaçada: 0 = rever já; 5 = intervalo mais longo. */
  box: number
  due: number
}

const DAY = 24 * 60 * 60 * 1000
/** Intervalo até a próxima revisão para cada caixa. */
export const BOX_INTERVAL_DAYS = [0, 1, 3, 7, 15, 30] as const

/**
 * Revisão espaçada (sistema de caixas): cada tentativa move a questão de caixa.
 * Errar ou deixar em branco volta para a caixa 0 (rever já). Acertar com certeza sobe;
 * acertar com dúvida ou chute mantém um intervalo curto. Questão marcada fica para já.
 */
export function schedule(history: SessionResult[]) {
  const state = new Map<string, PendingReview>()
  ;[...history]
    .sort((a, b) => a.finishedAt - b.finishedAt)
    .forEach((result) =>
      result.attempts.forEach((attempt) => {
        const previous = state.get(attempt.questionId)
        const box = nextBox(attempt, previous?.box)
        const priority = pendingScore(attempt)
        const due = attempt.marked ? result.finishedAt : result.finishedAt + (BOX_INTERVAL_DAYS[box] ?? 30) * DAY
        state.set(attempt.questionId, {
          questionId: attempt.questionId,
          lastSeen: result.finishedAt,
          box,
          due,
          score: priority?.score ?? 10,
          reason: priority?.reason ?? `Você acertou com certeza. Revisão programada para confirmar que ainda lembra.`,
        })
      }),
    )
  return state
}

function nextBox(attempt: Attempt, previous: number | undefined) {
  if (!attempt.answer || !attempt.correct) return 0
  if (attempt.confidence === "certeza") return previous === undefined ? 3 : Math.min(5, previous + 1)
  return Math.max(1, Math.min(previous ?? 1, 2))
}

/** Questões cuja revisão já venceu, das mais urgentes para as menos urgentes. */
export function reviewQueue(history: SessionResult[], now: number): PendingReview[] {
  return [...schedule(history).values()]
    .filter((item) => item.due <= now)
    .sort((a, b) => b.score - a.score || a.due - b.due)
}

/** Revisões que ainda vão vencer, agrupadas por dia a partir de amanhã. */
export function upcomingReviews(history: SessionResult[], now: number) {
  return [...schedule(history).values()].filter((item) => item.due > now).sort((a, b) => a.due - b.due)
}

function pendingScore(attempt: Attempt) {
  const bonus = attempt.marked ? 5 : 0
  const markedNote = attempt.marked ? " Você também marcou para revisar." : ""
  if (!attempt.answer) return { score: 60 + bonus, reason: `Ficou em branco.${markedNote}` }
  if (!attempt.correct && attempt.confidence === "certeza")
    return { score: 100 + bonus, reason: `Você errou marcando “tenho certeza”.${markedNote}` }
  if (!attempt.correct && attempt.confidence)
    return { score: 80 + bonus, reason: `Você errou e indicou ${attempt.confidence === "chute" ? "chute" : "dúvida"}.${markedNote}` }
  if (!attempt.correct) return { score: 70 + bonus, reason: `Você errou.${markedNote}` }
  if (attempt.confidence === "chute") return { score: 50 + bonus, reason: `Você acertou, mas no chute.${markedNote}` }
  if (attempt.confidence === "duvida") return { score: 40 + bonus, reason: `Você acertou, mas com dúvida.${markedNote}` }
  if (attempt.marked) return { score: 30, reason: "Você marcou para revisar." }
  if (!attempt.confidence) return { score: 20, reason: "Você acertou, sem indicar confiança. Revisão para confirmar." }
  return undefined
}

/** Domínio por tema, considerando a tentativa mais recente de cada questão. */
export function themeMastery(history: SessionResult[]) {
  const latest = new Map<string, Attempt>()
  ;[...history]
    .sort((a, b) => a.finishedAt - b.finishedAt)
    .forEach((result) => result.attempts.forEach((attempt) => latest.set(attempt.questionId, attempt)))
  const attempts = [...latest.values()]
  const keys = [...new Set(attempts.map((attempt) => `${attempt.disciplina}§${attempt.tema}`))]
  return keys
    .map((key) => {
      const subset = attempts.filter((attempt) => `${attempt.disciplina}§${attempt.tema}` === key)
      const first = subset[0] as Attempt
      return { disciplina: first.disciplina, tema: first.tema, ...tally(subset) }
    })
    .sort((a, b) => a.disciplina.localeCompare(b.disciplina) || a.tema.localeCompare(b.tema))
}

export function byDifficulty(attempts: Attempt[]) {
  return (["media", "dificil", "desafio"] as const)
    .map((dificuldade) => ({ dificuldade, ...tally(attempts.filter((attempt) => attempt.dificuldade === dificuldade)) }))
    .filter((row) => row.total > 0)
}

/** Questões em que o aluno gastou mais tempo, para treinar ritmo de prova. */
export function slowest(attempts: Attempt[], limit = 3) {
  return attempts
    .filter((attempt) => (attempt.timeMs ?? 0) > 0)
    .sort((a, b) => (b.timeMs ?? 0) - (a.timeMs ?? 0))
    .slice(0, limit)
}

/** Evolução: separa questões inéditas de repetidas para não confundir memorização com domínio. */
export function evolution(history: SessionResult[]) {
  return [...history]
    .sort((a, b) => a.finishedAt - b.finishedAt)
    .map((result) => ({
      id: result.id,
      at: result.finishedAt,
      mode: result.mode,
      all: tally(result.attempts),
      fresh: tally(result.attempts.filter((attempt) => !attempt.repeat)),
      repeated: tally(result.attempts.filter((attempt) => attempt.repeat)),
    }))
}

export function weekStart(now: number) {
  const date = new Date(now)
  const day = (date.getDay() + 6) % 7
  date.setHours(0, 0, 0, 0)
  date.setDate(date.getDate() - day)
  return date.getTime()
}

/** Questões respondidas (não em branco) desde segunda-feira desta semana. */
export function answeredThisWeek(history: SessionResult[], now: number) {
  const start = weekStart(now)
  return history
    .filter((result) => result.finishedAt >= start)
    .reduce((sum, result) => sum + result.attempts.filter((attempt) => attempt.answer).length, 0)
}

export function plural(count: number, one: string, many: string) {
  return count === 1 ? one : many
}

function joinParts(parts: string[]) {
  if (parts.length < 2) return parts.join("")
  return `${parts.slice(0, -1).join(", ")} e ${parts.at(-1)}`
}
