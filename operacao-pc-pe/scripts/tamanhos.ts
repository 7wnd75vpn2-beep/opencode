// Uso: npx tsx scripts/tamanhos.ts <arquivo>
// Lista questões em que a correta é a mais longa; "!!" marca folga visível (> 8%).
import { LETTERS, type Question } from "../src/domain/types"

const mod: Record<string, Question[]> = await import(`../${process.argv[2]}`)
const questions = Object.values(mod).flat()
const flagged = questions.flatMap((q) => {
  const lens = LETTERS.map((l) => q.alternativas[l].text.length)
  const correct = q.alternativas[q.correta].text.length
  const second = Math.max(...LETTERS.filter((l) => l !== q.correta).map((l) => q.alternativas[l].text.length))
  if (correct < second) return []
  const mark = correct > second * 1.08 && correct >= 30 ? "!!" : "  "
  return [`${mark} ${q.id} ${LETTERS.map((l, i) => `${l === q.correta ? "*" : ""}${lens[i]}`).join(" ")}`]
})
console.log(flagged.join("\n"))
console.log(`mais longa: ${flagged.length}/${questions.length} · folga visível: ${flagged.filter((line) => line.startsWith("!!")).length}`)
