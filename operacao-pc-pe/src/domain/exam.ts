import { tally } from "./analysis"
import { pickBalanced, type Random } from "./session"
import type { Attempt, Discipline, Question } from "./types"

/**
 * Formato da prova objetiva de Agente (PC-PE 2026), segundo resumos do edital publicados por
 * sites de concursos. O PDF oficial não pôde ser consultado; o app avisa isso ao aluno.
 */
export const EXAM = {
  nome: "Simulado PC-PE · Agente de Polícia",
  banca: "Cebraspe",
  fonte:
    "Formato segundo resumos do Edital nº 1 – PCPE/2026 publicados por sites de concursos. Confirme no edital oficial do Cebraspe.",
  /** A prova dura 4 h e inclui a redação; sugerimos 3 h para as objetivas. */
  duracaoTotalMin: 240,
  tempoObjetivasMin: 180,
  blocos: [
    {
      id: "P1",
      nome: "Noções de Direito",
      questoes: 20,
      disciplinas: [
        "Direito Constitucional",
        "Direito Administrativo",
        "Direito Penal",
        "Legislação Penal Especial",
        "Direito Processual Penal",
      ] satisfies Discipline[],
    },
    {
      id: "P2",
      nome: "Conhecimentos Específicos",
      questoes: 40,
      disciplinas: [
        "Língua Portuguesa",
        "Informática",
        "Raciocínio Lógico",
        "Estatística",
        "Contabilidade Geral",
      ] satisfies Discipline[],
    },
  ],
  /** Conteúdos do edital que o banco ainda não cobre. */
  lacunas: ["Legislação Estadual de Pernambuco (Constituição Estadual, arts. 101 a 105-B; Leis 6.425/1972 e 6.123/1968; LCs 137/2008 e 317/2015)"],
} as const

export type BlockId = (typeof EXAM.blocos)[number]["id"]

export function blockOf(disciplina: Discipline): BlockId {
  return EXAM.blocos.find((bloco) => bloco.disciplinas.some((item) => item === disciplina))?.id ?? "P2"
}

/** Monta a prova: cada bloco com sua quantidade, distribuída igualmente entre as matérias. */
export function pickExam(bank: Question[], seen: Set<string>, random?: Random) {
  return EXAM.blocos.flatMap((bloco) =>
    pickBalanced(
      bank.filter((question) => bloco.disciplinas.some((item) => item === question.disciplina)),
      bloco.questoes,
      seen,
      random,
    ),
  )
}

export function examSize(bank: Question[]) {
  return EXAM.blocos.reduce(
    (sum, bloco) =>
      sum + Math.min(bloco.questoes, bank.filter((question) => bloco.disciplinas.some((item) => item === question.disciplina)).length),
    0,
  )
}

export function byBlock(attempts: Attempt[]) {
  return EXAM.blocos.map((bloco) => ({
    id: bloco.id,
    nome: bloco.nome,
    ...tally(attempts.filter((attempt) => bloco.disciplinas.some((item) => item === attempt.disciplina))),
  }))
}
