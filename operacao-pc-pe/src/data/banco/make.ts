import { type Difficulty, type Discipline, type QuestionType, type Letter, type Question } from "../../domain/types"

type Alternative = readonly [text: string, why: string]

/** Atalho para escrever questões: as alternativas são listadas na ordem A–E. */
export function make(disciplina: Discipline) {
  return (input: {
    id: string
    tema: string
    dificuldade: Difficulty
    tipo: QuestionType
    enunciado: string
    alternativas: readonly [Alternative, Alternative, Alternative, Alternative, Alternative]
    correta: Letter
    explicacao: string
    conceito: string
    lembrar: string
    referencia?: string
  }): Question => ({
    id: input.id,
    cargo: "Agente de Polícia",
    disciplina,
    tema: input.tema,
    dificuldade: input.dificuldade,
    tipo: input.tipo,
    enunciado: input.enunciado,
    alternativas: {
      A: { text: input.alternativas[0][0], why: input.alternativas[0][1] },
      B: { text: input.alternativas[1][0], why: input.alternativas[1][1] },
      C: { text: input.alternativas[2][0], why: input.alternativas[2][1] },
      D: { text: input.alternativas[3][0], why: input.alternativas[3][1] },
      E: { text: input.alternativas[4][0], why: input.alternativas[4][1] },
    },
    correta: input.correta,
    explicacao: input.explicacao,
    conceito: input.conceito,
    lembrar: input.lembrar,
    referencia: input.referencia,
    origem: "autoral",
    status: "revisao-interna",
  })
}
