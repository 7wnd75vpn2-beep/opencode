import { reviewQueue } from "./analysis"
import { seenQuestionIds } from "./session"
import { DISCIPLINES, type Discipline, type Question, type SessionResult } from "./types"

export const REVIEW_SIZE = 10

export type Mission =
  | { kind: "revisao"; title: string; reason: string; questionIds: string[] }
  | { kind: "treino"; title: string; reason: string; disciplina: Discipline }
  | { kind: "simulado"; title: string; reason: string }

/** Próximo passo recomendado, derivado apenas do histórico real. */
export function nextMission(history: SessionResult[], bank: Question[], now: number): Mission | undefined {
  if (history.length === 0) return undefined
  const known = new Set(bank.map((question) => question.id))
  const queue = reviewQueue(history, now).filter((item) => known.has(item.questionId))
  const top = queue[0]
  if (top) {
    const selected = queue.slice(0, REVIEW_SIZE)
    const confident = selected.filter((item) => item.score >= 100).length
    return {
      kind: "revisao",
      title: `Revisar ${selected.length} ${selected.length === 1 ? "questão" : "questões"} pendentes`,
      reason:
        confident > 0
          ? `Começa pelas ${confident === 1 ? "questão em que" : `${confident} questões em que`} você errou com certeza — o sinal mais forte de conceito a corrigir.`
          : `Reúne erros, acertos inseguros e itens marcados, do mais urgente ao menos urgente.`,
      questionIds: selected.map((item) => item.questionId),
    }
  }
  const seen = seenQuestionIds(history)
  const coverage = DISCIPLINES.map((disciplina) => ({
    disciplina,
    unseen: bank.filter((question) => question.disciplina === disciplina && !seen.has(question.id)).length,
    answered: history.flatMap((result) => result.attempts).filter((attempt) => attempt.disciplina === disciplina && attempt.answer).length,
  }))
    .filter((item) => item.unseen > 0)
    .sort((a, b) => a.answered - b.answered)
  const least = coverage[0]
  if (least)
    return {
      kind: "treino",
      title: `Treino dirigido de ${least.disciplina}`,
      reason: `Nenhuma revisão pendente. ${least.disciplina} é a matéria com menos respostas suas (${least.answered}) e ainda tem ${least.unseen} ${least.unseen === 1 ? "questão inédita" : "questões inéditas"}.`,
      disciplina: least.disciplina,
    }
  return {
    kind: "simulado",
    title: "Simulado PC-PE",
    reason: "Você já viu todas as questões e não há revisões vencidas. Um simulado no formato da prova mede retenção e ritmo — lembrando que serão questões repetidas.",
  }
}
