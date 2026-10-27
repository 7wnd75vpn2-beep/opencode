import { Info, X } from "lucide-react"
import { useEffect, useId, useRef, type ReactNode } from "react"

export function formatDuration(ms: number) {
  const total = Math.max(0, Math.round(ms / 1000))
  const hours = Math.floor(total / 3600)
  const minutes = Math.floor((total % 3600) / 60)
  const seconds = total % 60
  const pad = (value: number) => value.toString().padStart(2, "0")
  return hours > 0 ? `${hours}:${pad(minutes)}:${pad(seconds)}` : `${pad(minutes)}:${pad(seconds)}`
}

export function spokenDuration(ms: number) {
  const minutes = Math.floor(ms / 60000)
  const seconds = Math.round((ms % 60000) / 1000)
  if (minutes === 0) return `${seconds} s`
  return seconds ? `${minutes} min ${seconds} s` : `${minutes} min`
}

export function formatDate(at: number) {
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }).format(at)
}

export function percent(rate: number) {
  return `${Math.round(rate * 100)}%`
}

/** Modal acessível baseado em <dialog>: prende o foco e fecha com Esc. */
export function Dialog(props: {
  open: boolean
  title: string
  children: ReactNode
  onClose: () => void
  actions: ReactNode
}) {
  const ref = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (props.open && !dialog.open) dialog.showModal()
    if (!props.open && dialog.open) dialog.close()
  }, [props.open])
  return (
    <dialog ref={ref} className="dialog" aria-labelledby={titleId} onClose={props.onClose} onCancel={props.onClose}>
      <div className="dialog-body">
        <h2 id={titleId} className="dialog-title">
          {props.title}
        </h2>
        <div className="dialog-text">{props.children}</div>
        <div className="dialog-actions">{props.actions}</div>
      </div>
    </dialog>
  )
}

export function Notice(props: { children: ReactNode; onDismiss?: () => void; tone?: "info" | "warn" }) {
  return (
    <div className={`notice notice-${props.tone ?? "info"}`} role="status">
      <Info size={18} aria-hidden="true" />
      <div className="notice-text">{props.children}</div>
      {props.onDismiss && (
        <button type="button" className="icon-button" onClick={props.onDismiss} aria-label="Fechar aviso">
          <X size={16} aria-hidden="true" />
        </button>
      )}
    </div>
  )
}

export function SampleNote(props: { children: ReactNode }) {
  return (
    <p className="sample-note">
      <Info size={14} aria-hidden="true" />
      <span>{props.children}</span>
    </p>
  )
}

export function ProgressBar(props: { value: number; max: number; label: string }) {
  const ratio = props.max ? Math.min(1, props.value / props.max) : 0
  return (
    <div
      className="progress"
      role="progressbar"
      aria-label={props.label}
      aria-valuemin={0}
      aria-valuemax={props.max}
      aria-valuenow={props.value}
    >
      <div className="progress-fill" style={{ transform: `scaleX(${ratio})` }} />
    </div>
  )
}

export function Eyebrow(props: { children: ReactNode }) {
  return <p className="eyebrow">{props.children}</p>
}
