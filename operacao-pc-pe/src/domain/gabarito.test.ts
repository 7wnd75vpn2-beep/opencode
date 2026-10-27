import { expect, test } from "vitest"
import { QUESTIONS } from "../data/questions"
import { LETTERS } from "./types"

test("justificativas coerentes com o gabarito", () => {
  const problems = QUESTIONS.flatMap((question) =>
    LETTERS.flatMap((letter) => {
      const why = question.alternativas[letter].why
      const saysCorrect = why.startsWith("Correta")
      return saysCorrect === (letter === question.correta) ? [] : [`${question.id} ${letter}`]
    }),
  )
  expect(problems).toEqual([])
})
