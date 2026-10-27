export const LETTERS = ["A", "B", "C", "D", "E"] as const
export type Letter = (typeof LETTERS)[number]

export const DISCIPLINES = [
  "Língua Portuguesa",
  "Direito Constitucional",
  "Direito Administrativo",
  "Direito Penal",
  "Direito Processual Penal",
  "Raciocínio Lógico",
] as const
export type Discipline = (typeof DISCIPLINES)[number]

export type Alternative = {
  /** Texto exibido. Não deve citar letras, porque a ordem é embaralhada a cada sessão. */
  text: string
  /** Por que esta alternativa está certa ou errada. */
  why: string
}

export type Question = {
  id: string
  cargo: "Agente de Polícia"
  disciplina: Discipline
  tema: string
  enunciado: string
  /** Chave original de cada alternativa (A–E). A exibição pode reordenar. */
  alternativas: Record<Letter, Alternative>
  correta: Letter
  explicacao: string
  conceito: string
  lembrar: string
  referencia?: string
  origem: "autoral"
  status: "rascunho" | "revisao-interna" | "revisada"
}

export type Confidence = "certeza" | "duvida" | "chute"

export type Mode = "diagnostico" | "treino" | "simulado" | "revisao"

export type SessionItem = {
  questionId: string
  /** Ordem de exibição: order[0] é a chave original mostrada na posição A. */
  order: Letter[]
  /** Chave original escolhida (não a posição exibida). */
  answer?: Letter
  confidence?: Confidence
  marked: boolean
  /** No treino e na revisão: resposta conferida e bloqueada. */
  checked: boolean
  /** Já havia sido respondida em sessão concluída anterior. */
  repeat: boolean
}

export type Session = {
  id: string
  mode: Mode
  title: string
  createdAt: number
  items: SessionItem[]
  current: number
  /** Tempo acumulado até a última pausa. */
  elapsedMs: number
  finishedAt?: number
}

export type Attempt = {
  questionId: string
  disciplina: Discipline
  tema: string
  answer?: Letter
  correct: boolean
  confidence?: Confidence
  marked: boolean
  repeat: boolean
}

export type SessionResult = {
  id: string
  mode: Mode
  title: string
  startedAt: number
  finishedAt: number
  durationMs: number
  attempts: Attempt[]
  /** Itens completos para revisar o gabarito depois. */
  items: SessionItem[]
}

export type Flag = {
  id: string
  questionId: string
  note: string
  createdAt: number
}

export type Preferences = {
  weeklyGoal: number
  introSeen: boolean
}

export type AppState = {
  version: 1
  active?: Session
  history: SessionResult[]
  flags: Flag[]
  preferences: Preferences
}
