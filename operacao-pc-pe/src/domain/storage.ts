import {
  DISCIPLINES,
  LETTERS,
  type AppState,
  type Attempt,
  type Confidence,
  type Flag,
  type Mode,
  type Preferences,
  type Session,
  type SessionItem,
  type SessionResult,
} from "./types"

export const STORAGE_KEY = "operacao-pcpe:v1"
export const EXPORT_APP = "operacao-pc-pe"

export const DEFAULT_PREFERENCES: Preferences = { weeklyGoal: 60, introSeen: false }

export function emptyState(): AppState {
  return { version: 1, history: [], flags: [], preferences: { ...DEFAULT_PREFERENCES } }
}

export type LoadOutcome = { state: AppState; notice?: string }

/** Lê o estado salvo. Armazenamento indisponível ou corrompido nunca derruba o app. */
export function loadState(storage: Storage | undefined): LoadOutcome {
  if (!storage) return { state: emptyState(), notice: "O armazenamento local está indisponível. Seu progresso não será salvo nesta visita." }
  const raw = readRaw(storage)
  if (raw === undefined)
    return { state: emptyState(), notice: "O armazenamento local está bloqueado neste navegador. Seu progresso não será salvo." }
  if (raw === null) return { state: emptyState() }
  const state = parseState(parseJson(raw))
  if (state) return { state }
  backupCorrupt(storage, raw)
  return {
    state: emptyState(),
    notice: "Os dados salvos estavam ilegíveis e não puderam ser carregados. Uma cópia foi guardada e o app recomeçou do zero.",
  }
}

export function saveState(storage: Storage | undefined, state: AppState) {
  if (!storage) return false
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(state))
    return true
  } catch {
    return false
  }
}

export function exportState(state: AppState, now: number) {
  return JSON.stringify({ app: EXPORT_APP, exportedAt: new Date(now).toISOString(), state }, null, 2)
}

export function importState(text: string): { state: AppState } | { error: string } {
  const data = parseJson(text)
  if (!isRecord(data) || data.app !== EXPORT_APP)
    return { error: "Este arquivo não é um progresso exportado pela Operação PC-PE." }
  const state = parseState(data.state)
  if (!state) return { error: "O arquivo está incompleto ou foi alterado e não pôde ser importado." }
  return { state }
}

function readRaw(storage: Storage) {
  try {
    return storage.getItem(STORAGE_KEY)
  } catch {
    return undefined
  }
}

function backupCorrupt(storage: Storage, raw: string) {
  try {
    storage.setItem(`${STORAGE_KEY}:corrompido`, raw)
  } catch {
    // Sem espaço ou bloqueado: seguimos com o estado vazio.
  }
}

function parseJson(text: string): unknown {
  try {
    return JSON.parse(text)
  } catch {
    return undefined
  }
}

// ───────────── Validação estrutural ─────────────

const MODES: Mode[] = ["diagnostico", "treino", "simulado", "revisao"]
const CONFIDENCES: Confidence[] = ["certeza", "duvida", "chute"]

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

const isString = (value: unknown): value is string => typeof value === "string"
const isNumber = (value: unknown): value is number => typeof value === "number" && Number.isFinite(value)
const isBoolean = (value: unknown): value is boolean => typeof value === "boolean"
const isLetter = (value: unknown) => LETTERS.some((letter) => letter === value)
const optional = (value: unknown, check: (value: unknown) => boolean) => value === undefined || check(value)
const isMode = (value: unknown) => MODES.some((mode) => mode === value)
const isConfidence = (value: unknown) => CONFIDENCES.some((confidence) => confidence === value)

function isItem(value: unknown): value is SessionItem {
  if (!isRecord(value) || !Array.isArray(value.order)) return false
  const order = value.order
  return (
    isString(value.questionId) &&
    order.length === LETTERS.length &&
    order.every(isLetter) &&
    new Set(order).size === LETTERS.length &&
    optional(value.answer, isLetter) &&
    optional(value.confidence, isConfidence) &&
    isBoolean(value.marked) &&
    isBoolean(value.checked) &&
    isBoolean(value.repeat)
  )
}

function isSession(value: unknown): value is Session {
  return (
    isRecord(value) &&
    isString(value.id) &&
    isMode(value.mode) &&
    isString(value.title) &&
    isNumber(value.createdAt) &&
    Array.isArray(value.items) &&
    value.items.length > 0 &&
    value.items.every(isItem) &&
    isNumber(value.current) &&
    value.current >= 0 &&
    value.current < value.items.length &&
    isNumber(value.elapsedMs) &&
    optional(value.finishedAt, isNumber)
  )
}

function isAttempt(value: unknown): value is Attempt {
  return (
    isRecord(value) &&
    isString(value.questionId) &&
    DISCIPLINES.some((discipline) => discipline === value.disciplina) &&
    isString(value.tema) &&
    optional(value.answer, isLetter) &&
    isBoolean(value.correct) &&
    optional(value.confidence, isConfidence) &&
    isBoolean(value.marked) &&
    isBoolean(value.repeat)
  )
}

function isResult(value: unknown): value is SessionResult {
  return (
    isRecord(value) &&
    isString(value.id) &&
    isMode(value.mode) &&
    isString(value.title) &&
    isNumber(value.startedAt) &&
    isNumber(value.finishedAt) &&
    isNumber(value.durationMs) &&
    Array.isArray(value.attempts) &&
    value.attempts.every(isAttempt) &&
    Array.isArray(value.items) &&
    value.items.every(isItem)
  )
}

function isFlag(value: unknown): value is Flag {
  return isRecord(value) && isString(value.id) && isString(value.questionId) && isString(value.note) && isNumber(value.createdAt)
}

function isPreferences(value: unknown): value is Preferences {
  return isRecord(value) && isNumber(value.weeklyGoal) && value.weeklyGoal > 0 && isBoolean(value.introSeen)
}

export function parseState(value: unknown): AppState | undefined {
  if (!isRecord(value) || value.version !== 1) return undefined
  if (!Array.isArray(value.history) || !value.history.every(isResult)) return undefined
  if (!Array.isArray(value.flags) || !value.flags.every(isFlag)) return undefined
  if (!isPreferences(value.preferences)) return undefined
  const active = isSession(value.active) ? value.active : undefined
  if (value.active !== undefined && !active) return undefined
  return {
    version: 1,
    active,
    history: value.history,
    flags: value.flags,
    preferences: value.preferences,
  }
}
