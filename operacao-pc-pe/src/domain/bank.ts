import { QUESTIONS } from "../data/questions"
import { DISCIPLINES, LETTERS, type Question } from "./types"

export type BankIssue = { id: string; problem: string }

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
  if (!question.tema.trim()) problems.push("tema vazio")
  if (!question.enunciado.trim()) problems.push("enunciado vazio")
  if (!LETTERS.includes(question.correta)) problems.push("resposta correta inválida")
  const alternatives = LETTERS.map((letter) => question.alternativas[letter])
  if (alternatives.some((alternative) => !alternative?.text.trim() || !alternative.why.trim()))
    problems.push("alternativa sem texto ou sem justificativa")
  const texts = alternatives.map((alternative) => alternative?.text.trim().toLowerCase())
  if (new Set(texts).size !== LETTERS.length) problems.push("alternativas repetidas")
  if (Object.keys(question.alternativas).length !== LETTERS.length) problems.push("número de alternativas diferente de cinco")
  if (!question.explicacao.trim() || !question.conceito.trim() || !question.lembrar.trim())
    problems.push("comentário incompleto")
  if (question.origem !== "autoral") problems.push("origem não identificada")
  if (question.status === "rascunho") problems.push("questão em rascunho")
  return problems
}

const checked = validateBank(QUESTIONS)

export const BANK = checked.valid
export const BANK_ISSUES = checked.issues
export const BANK_BY_ID = new Map(BANK.map((question) => [question.id, question]))

export function themesOf(questions: Question[]) {
  return [...new Set(questions.map((question) => question.tema))]
}
