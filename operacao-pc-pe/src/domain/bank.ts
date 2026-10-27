import { QUESTIONS } from "../data/questions"
import { DIFFICULTIES, DISCIPLINES, LETTERS, QUESTION_TYPES, type Question } from "./types"

export type BankIssue = { id: string; problem: string }

/**
 * A alternativa correta não pode ser bem mais longa que as erradas: isso permite acertar
 * “pelo tamanho”, sem saber o conteúdo.
 */
export const MAX_CORRECT_LENGTH_RATIO = 1.3

/** Valida o banco e devolve apenas as questões aptas a entrar em sessões. */
export function validateBank(questions: Question[]) {
  const seen = new Set<string>()
  const issues: BankIssue[] = []
  const valid = questions.filter((question) => {
    const problems = inspect(question, seen)
    seen.add(question.id)
    problems.forEach((problem) => issues.push({ id: question.id || "(sem id)", problem }))
    return problems.length === 0
  })
  return { valid, issues }
}

function inspect(question: Question, seen: Set<string>) {
  const problems: string[] = []
  if (!question.id.trim()) problems.push("id vazio")
  if (seen.has(question.id)) problems.push("id duplicado")
  if (question.cargo !== "Agente de Polícia") problems.push("cargo diferente de Agente de Polícia")
  if (!DISCIPLINES.includes(question.disciplina)) problems.push("disciplina desconhecida")
  if (!DIFFICULTIES.includes(question.dificuldade)) problems.push("dificuldade inválida")
  if (!QUESTION_TYPES.includes(question.tipo)) problems.push("tipo de questão inválido")
  if (!question.tema.trim()) problems.push("tema vazio")
  if (!question.enunciado.trim()) problems.push("enunciado vazio")
  if (!LETTERS.includes(question.correta)) problems.push("resposta correta inválida")
  if (Object.keys(question.alternativas).length !== LETTERS.length) problems.push("número de alternativas diferente de cinco")
  const alternatives = LETTERS.map((letter) => question.alternativas[letter])
  if (alternatives.some((alternative) => !alternative?.text.trim() || !alternative.why.trim()))
    problems.push("alternativa sem texto ou sem justificativa")
  const texts = alternatives.map((alternative) => alternative?.text.trim().toLowerCase())
  if (new Set(texts).size !== LETTERS.length) problems.push("alternativas repetidas")
  if (/\b(alternativa|letra|opção) [A-E]\b/.test(alternatives.map((alternative) => alternative?.text).join(" ")))
    problems.push("alternativa cita letra, mas a ordem é embaralhada")
  if (correctTooLong(question)) problems.push("alternativa correta muito mais longa que as demais")
  if (!question.explicacao.trim() || !question.conceito.trim() || !question.lembrar.trim())
    problems.push("comentário incompleto")
  if (question.origem !== "autoral") problems.push("origem não identificada")
  if (question.status === "rascunho") problems.push("questão em rascunho")
  return problems
}

export function correctTooLong(question: Question) {
  const correct = question.alternativas[question.correta].text.length
  // Respostas de uma ou duas palavras (“worm”, “Shift + Delete”) não dão pista pelo tamanho.
  if (correct < 30) return false
  const others = LETTERS.filter((letter) => letter !== question.correta).map((letter) => question.alternativas[letter].text.length)
  const average = others.reduce((sum, length) => sum + length, 0) / others.length
  return correct > average * MAX_CORRECT_LENGTH_RATIO
}

const checked = validateBank(QUESTIONS)

export const BANK = checked.valid
export const BANK_ISSUES = checked.issues
export const BANK_BY_ID = new Map(BANK.map((question) => [question.id, question]))

export function themesOf(questions: Question[]) {
  return [...new Set(questions.map((question) => question.tema))]
}
