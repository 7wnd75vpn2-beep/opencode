export const LETTERS = ["A", "B", "C", "D", "E"] as const
export type Letter = (typeof LETTERS)[number]

export const DISCIPLINES = [
  "Direito Constitucional",
  "Direito Administrativo",
  "Direito Penal",
  "Legislação Penal Especial",
  "Direito Processual Penal",
  "Língua Portuguesa",
  "Informática",
  "Raciocínio Lógico",
  "Estatística",
  "Contabilidade Geral",
] as const
export type Discipline = (typeof DISCIPLINES)[number]

export const DIFFICULTIES = ["media", "dificil", "desafio"] as const
export type Difficulty = (typeof DIFFICULTIES)[number]

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  media: "Média",
  dificil: "Difícil",
  desafio: "Desafio",
}

/**
 * situacao: caso concreto (“situação hipotética”), como a Cebraspe costuma cobrar.
 * assertivas: julgar afirmações e escolher a correta (ou a incorreta).
 * direta: pergunta direta sobre um conceito ou cálculo.
 */
export const QUESTION_TYPES = ["situacao", "assertivas", "direta"] as const
export type QuestionType = (typeof QUESTION_TYPES)[number]

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
  dificuldade: Difficulty
  tipo: QuestionType
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

export type Mode = "diagnostico" | "treino" | "simulado" | "prova" | "revisao"

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
  /** Alternativas riscadas pelo aluno (chaves originais). */
  struck?: Letter[]
  /** Tempo gasto com esta questão aberta. */
  timeMs?: number
}

export type Session = {
  id: string
  mode: Mode
  title: string
  createdAt: number
  items: SessionItem[]
  current: number
  /** Tempo acumulado de tela. */
  elapsedMs: number
  /** Simulado com tempo de prova: horário-limite real, que não pausa ao sair da tela. */
  deadline?: number
  limitMs?: number
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
  dificuldade?: Difficulty
  timeMs?: number
}

export type SessionResult = {
  id: string
  mode: Mode
  title: string
  startedAt: number
  finishedAt: number
  durationMs: number
  /** Encerrado automaticamente porque o tempo de prova acabou. */
  timedOut?: boolean
  limitMs?: number
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
  /** Escala do texto das questões (1 = padrão). */
  fontScale?: number
}

export type AppState = {
  version: 1
  active?: Session
  history: SessionResult[]
  flags: Flag[]
  preferences: Preferences
}
