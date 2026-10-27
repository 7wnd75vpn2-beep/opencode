// Uso: npx tsx scripts/relatorio-banco.ts <arquivo-do-banco>
import { LETTERS, type Question } from "../src/domain/types"

const file = process.argv[2] ?? ""
const mod: Record<string, Question[]> = await import(`../${file}`)
const questions = Object.values(mod).flat()
const avg = (q: Question) => {
  const others = LETTERS.filter((l) => l !== q.correta).map((l) => q.alternativas[l].text.length)
  return others.reduce((a, b) => a + b, 0) / others.length
}
const longest = questions.filter((q) => q.alternativas[q.correta].text.length === Math.max(...LETTERS.map((l) => q.alternativas[l].text.length)))
const ratios = questions.map((q) => ({ id: q.id, ratio: q.alternativas[q.correta].text.length / avg(q) })).filter((r) => r.ratio > 1.25)
const count = (key: keyof Question) => questions.reduce<Record<string, number>>((acc, q) => ({ ...acc, [String(q[key])]: (acc[String(q[key])] ?? 0) + 1 }), {})
const correctWhy = questions.flatMap((q) => LETTERS.filter((l) => q.alternativas[l].why.startsWith("Correta") !== (l === q.correta)).map((l) => `${q.id}:${l}`))
console.log({ total: questions.length, corretaMaisLonga: `${longest.length} (${Math.round((longest.length / questions.length) * 100)}%)`, quaseLongas: ratios, tipo: count("tipo"), dificuldade: count("dificuldade"), correta: count("correta"), whyIncoerente: correctWhy, ids: questions.length - new Set(questions.map((q) => q.id)).size })
