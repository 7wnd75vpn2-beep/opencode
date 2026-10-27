import { describe, expect, test } from "vitest"
import { QUESTIONS } from "../data/questions"
import { correctTooLong, validateBank } from "./bank"
import { DISCIPLINES, LETTERS, type Question } from "./types"

/** Travas de qualidade do banco: impedem padrões que deixam a prova fácil de “adivinhar”. */
function longest(question: Question, margin = 1) {
  const others = LETTERS.filter((letter) => letter !== question.correta).map((letter) => question.alternativas[letter].text.length)
  const correct = question.alternativas[question.correta].text.length
  // Em respostas de uma ou duas palavras, diferença de tamanho não sugere nada.
  if (margin > 1 && correct < 30) return false
  return correct >= Math.max(...others) * margin
}

describe("qualidade do banco", () => {
  test("nenhuma questão é bloqueada pela validação", () => {
    expect(validateBank(QUESTIONS).issues).toEqual([])
  })

  test("o tamanho da alternativa não entrega a resposta", () => {
    // Empates de poucos caracteres não são perceptíveis; o que entrega a resposta é a folga visível.
    const visiblyLongest = QUESTIONS.filter((question) => longest(question, 1.08)).map((question) => question.id)
    expect(visiblyLongest.length / QUESTIONS.length, visiblyLongest.join(", ")).toBeLessThanOrEqual(0.12)
    expect(QUESTIONS.filter(longest).length / QUESTIONS.length).toBeLessThanOrEqual(0.4)
    expect(QUESTIONS.filter(correctTooLong).map((question) => question.id)).toEqual([])
  })

  test("cada matéria tem ao menos 20 questões e variedade de formato e dificuldade", () => {
    DISCIPLINES.forEach((disciplina) => {
      const subset = QUESTIONS.filter((question) => question.disciplina === disciplina)
      expect(subset.length, disciplina).toBeGreaterThanOrEqual(20)
      expect(new Set(subset.map((question) => question.dificuldade)).size, disciplina).toBe(3)
    })
  })

  test("situações hipotéticas e itens “incorreta” têm presença real", () => {
    const situacoes = QUESTIONS.filter((question) => question.tipo === "situacao").length / QUESTIONS.length
    const incorretas = QUESTIONS.filter((question) => /INCORRETA|NÃO/.test(question.enunciado)).length / QUESTIONS.length
    expect(situacoes).toBeGreaterThanOrEqual(0.3)
    expect(incorretas).toBeGreaterThanOrEqual(0.05)
  })
})
