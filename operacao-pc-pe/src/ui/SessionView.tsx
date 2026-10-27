import { Bookmark, BookmarkCheck, Check, ChevronLeft, ChevronRight, Flag, LayoutGrid, LogOut, Repeat, Timer, X } from "lucide-react"
import { useEffect, useId, useRef, useState } from "react"
import {
  blankCount,
  checkAnswer,
  correctsImmediately,
  goTo,
  MODE_LABEL,
  selectAnswer,
  setConfidence,
  toggleMark,
} from "../domain/session"
import { LETTERS, type Confidence, type Question, type Session } from "../domain/types"
import { Dialog, formatDuration, ProgressBar } from "./components"
import { Explanation } from "./Explanation"

const CONFIDENCE_OPTIONS: { value: Confidence; label: string }[] = [
  { value: "certeza", label: "Tenho certeza" },
  { value: "duvida", label: "Estou em dúvida" },
  { value: "chute", label: "Foi um chute" },
]

export function SessionView(props: {
  session: Session
  bank: Map<string, Question>
  onChange: (session: Session) => void
  onFinish: (session: Session) => void
  onExit: () => void
}) {
  const session = props.session
  const latest = useRef(session)
  latest.current = session
  const change = useRef(props.onChange)
  change.current = props.onChange
  const [mapOpen, setMapOpen] = useState(false)
  const [confirming, setConfirming] = useState(false)
  const immediate = correctsImmediately(session.mode)
  const index = session.current
  const item = session.items[index]
  const question = item && props.bank.get(item.questionId)
  const answered = session.items.filter((entry) => entry.answer).length
  const blanks = blankCount(session)
  const last = index === session.items.length - 1
  const ids = { question: useId(), confidence: useId() }

  // Cronômetro: soma o tempo apenas enquanto a aba está visível.
  useEffect(() => {
    const timer = window.setInterval(() => {
      if (document.visibilityState !== "visible") return
      change.current({ ...latest.current, elapsedMs: latest.current.elapsedMs + 1000 })
    }, 1000)
    return () => window.clearInterval(timer)
  }, [])

  // Atalhos: A–E responde, M marca para revisar.
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.ctrlKey || event.metaKey || event.altKey) return
      const target = event.target
      if (target instanceof HTMLElement && target.closest("input[type=number], input[type=text], textarea, select, dialog[open]")) return
      if (document.querySelector("dialog[open]")) return
      const key = event.key.toUpperCase()
      const position = LETTERS.findIndex((letter) => letter === key)
      const current = latest.current
      const entry = current.items[current.current]
      if (!entry) return
      if (position >= 0 && !entry.checked) {
        const original = entry.order[position]
        if (original) change.current(selectAnswer(current, current.current, original))
        return
      }
      if (key === "M") change.current(toggleMark(current, current.current))
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  if (!item || !question) return null

  function move(target: number) {
    props.onChange(goTo(session, target))
    setMapOpen(false)
    document.getElementById(ids.question)?.focus({ preventScroll: true })
    window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })
  }

  function requestFinish() {
    if (blanks > 0) return setConfirming(true)
    props.onFinish(session)
  }

  const primary = (() => {
    if (immediate && !item.checked)
      return (
        <button type="button" className="button button-primary" disabled={!item.answer} onClick={() => props.onChange(checkAnswer(session, index))}>
          <Check size={18} aria-hidden="true" /> Conferir resposta
        </button>
      )
    if (last)
      return (
        <button type="button" className="button button-primary" onClick={requestFinish}>
          <Flag size={18} aria-hidden="true" /> {immediate ? "Ver resultado" : "Finalizar"}
        </button>
      )
    return (
      <button type="button" className="button button-primary" onClick={() => move(index + 1)}>
        Próxima <ChevronRight size={18} aria-hidden="true" />
      </button>
    )
  })()

  return (
    <div className="session">
      <div className="session-bar">
        <div className="session-bar-inner shell">
          <div className="session-id">
            <span className="session-mode">{MODE_LABEL[session.mode]}</span>
            <span className="session-count" aria-live="polite">
              Questão {index + 1} de {session.items.length}
              <span className="muted"> · {answered} respondidas</span>
            </span>
          </div>
          <div className="session-tools">
            <span className="timer" title="Tempo de sessão">
              <Timer size={16} aria-hidden="true" />
              <span className="sr-only">Tempo decorrido: </span>
              <span className="timer-value">{formatDuration(session.elapsedMs)}</span>
            </span>
            <button
              type="button"
              className="icon-button map-toggle"
              aria-expanded={mapOpen}
              aria-controls="question-map"
              onClick={() => setMapOpen((open) => !open)}
            >
              <LayoutGrid size={18} aria-hidden="true" />
              <span className="sr-only">Mapa de questões</span>
            </button>
            <button type="button" className="icon-button" onClick={props.onExit} title="Sair — o progresso fica salvo">
              <LogOut size={18} aria-hidden="true" />
              <span className="sr-only">Sair da sessão (o progresso fica salvo)</span>
            </button>
          </div>
        </div>
        <ProgressBar value={answered} max={session.items.length} label="Questões respondidas" />
      </div>

      <div className="session-layout shell">
        <article className="question" aria-labelledby={ids.question}>
          {session.mode === "revisao" && (
            <p className="repeat-banner">
              <Repeat size={16} aria-hidden="true" />
              Revisão com questões que você já viu. Acertar de novo mostra que lembrou desta resposta — ainda não comprova domínio do assunto.
            </p>
          )}
          <header className="question-meta">
            <span className="meta-discipline">{question.disciplina}</span>
            <span className="meta-sep" aria-hidden="true">
              /
            </span>
            <span className="meta-theme">{question.tema}</span>
            {item.repeat && <span className="tag">já vista</span>}
          </header>

          <h1 id={ids.question} className="question-text" tabIndex={-1}>
            {question.enunciado}
          </h1>

          <fieldset className="alternatives" disabled={item.checked}>
            <legend className="sr-only">Alternativas</legend>
            {item.order.map((original, position) => {
              const letter = LETTERS[position]
              const selected = item.answer === original
              const reveal = item.checked
              const state = reveal
                ? original === question.correta
                  ? "is-correct"
                  : selected
                    ? "is-wrong"
                    : "is-dim"
                : selected
                  ? "is-selected"
                  : ""
              return (
                <label key={original} className={`alternative ${state}`}>
                  <input
                    type="radio"
                    name={`q-${item.questionId}`}
                    checked={selected}
                    onChange={() => props.onChange(selectAnswer(session, index, original))}
                  />
                  <span className="alt-letter" aria-hidden="true">
                    {letter}
                  </span>
                  <span className="alt-text">
                    <span className="sr-only">Alternativa {letter}: </span>
                    {question.alternativas[original].text}
                  </span>
                  {reveal && original === question.correta && (
                    <span className="alt-status">
                      <Check size={16} aria-hidden="true" /> Correta
                    </span>
                  )}
                  {reveal && selected && original !== question.correta && (
                    <span className="alt-status">
                      <X size={16} aria-hidden="true" /> Sua resposta
                    </span>
                  )}
                </label>
              )
            })}
          </fieldset>

          <div className="question-tools">
            <fieldset className="confidence" disabled={item.checked} aria-describedby={ids.confidence}>
              <legend className="field-label">Quão seguro você está?</legend>
              <p id={ids.confidence} className="field-hint">
                Opcional. Se não indicar, nada será suposto.
              </p>
              <div className="segmented">
                {CONFIDENCE_OPTIONS.map((option) => (
                  <label key={option.value} className={`segment ${item.confidence === option.value ? "is-selected" : ""} conf-${option.value}`}>
                    <input
                      type="radio"
                      name={`c-${item.questionId}`}
                      checked={item.confidence === option.value}
                      onChange={() => props.onChange(setConfidence(session, index, option.value))}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
              {item.confidence && !item.checked && (
                <button type="button" className="text-button" onClick={() => props.onChange(setConfidence(session, index, undefined))}>
                  Não informar confiança
                </button>
              )}
            </fieldset>

            <button
              type="button"
              className={`mark-button ${item.marked ? "is-on" : ""}`}
              aria-pressed={item.marked}
              onClick={() => props.onChange(toggleMark(session, index))}
            >
              {item.marked ? <BookmarkCheck size={18} aria-hidden="true" /> : <Bookmark size={18} aria-hidden="true" />}
              {item.marked ? "Marcada para revisar" : "Marcar para revisar"}
            </button>
          </div>

          {item.checked && (
            <div className="feedback" role="status">
              <p className={`feedback-head ${item.answer === question.correta ? "is-correct" : "is-wrong"}`}>
                {item.answer === question.correta ? "Você acertou." : "Resposta incorreta."}
              </p>
              <Explanation question={question} item={item} />
            </div>
          )}

          <p className="shortcut-hint">Atalhos: A–E escolhe a alternativa · M marca para revisar</p>
        </article>

        <aside id="question-map" className={`qmap panel ${mapOpen ? "is-open" : ""}`} aria-label="Mapa de questões">
          <div className="qmap-head">
            <h2 className="qmap-title">Mapa</h2>
            <span className="muted">
              {answered}/{session.items.length}
            </span>
          </div>
          <ol className="qmap-grid">
            {session.items.map((entry, position) => {
              const entryQuestion = props.bank.get(entry.questionId)
              const verdict = entry.checked && entryQuestion ? (entry.answer === entryQuestion.correta ? "certa" : "errada") : undefined
              const status = [
                entry.answer ? "respondida" : "em branco",
                entry.marked ? "marcada para revisar" : "",
                verdict ? `conferida, ${verdict}` : "",
              ]
                .filter(Boolean)
                .join(", ")
              return (
                <li key={entry.questionId}>
                  <button
                    type="button"
                    className={[
                      "qmap-cell",
                      entry.answer ? "is-answered" : "",
                      entry.marked ? "is-marked" : "",
                      position === index ? "is-current" : "",
                      verdict === "certa" ? "is-right" : "",
                      verdict === "errada" ? "is-miss" : "",
                    ].join(" ")}
                    aria-current={position === index ? "step" : undefined}
                    aria-label={`Questão ${position + 1}: ${status}`}
                    onClick={() => move(position)}
                  >
                    {position + 1}
                  </button>
                </li>
              )
            })}
          </ol>
          <ul className="qmap-legend">
            <li>
              <span className="qmap-key is-answered" aria-hidden="true" /> Respondida
            </li>
            <li>
              <span className="qmap-key" aria-hidden="true" /> Em branco
            </li>
            <li>
              <span className="qmap-key is-marked" aria-hidden="true" /> Marcada
            </li>
          </ul>
          <button type="button" className="button button-ghost button-block" onClick={requestFinish}>
            <Flag size={16} aria-hidden="true" /> Finalizar sessão
          </button>
          {!immediate && <p className="field-hint">O gabarito aparece somente depois de finalizar.</p>}
        </aside>
      </div>

      <nav className="session-actions" aria-label="Navegação entre questões">
        <div className="session-actions-inner shell">
          <button type="button" className="button button-ghost" aria-label="Questão anterior" disabled={index === 0} onClick={() => move(index - 1)}>
            <ChevronLeft size={18} aria-hidden="true" /> <span className="hide-sm">Anterior</span>
          </button>
          <div className="session-actions-main">
            {immediate && !item.checked && !last && (
              <button type="button" className="button button-ghost" onClick={() => move(index + 1)}>
                Pular
              </button>
            )}
            {primary}
          </div>
        </div>
      </nav>

      <Dialog
        open={confirming}
        title={`${blanks} ${blanks === 1 ? "questão está" : "questões estão"} em branco`}
        onClose={() => setConfirming(false)}
        actions={
          <>
            <button type="button" className="button button-ghost" onClick={() => setConfirming(false)}>
              Voltar e responder
            </button>
            <button type="button" className="button button-primary" onClick={() => props.onFinish(session)}>
              Finalizar mesmo assim
            </button>
          </>
        }
      >
        <p>
          Você respondeu {answered} de {session.items.length}. Questões em branco contam como zero na pontuação de estudo e entram na sua próxima
          revisão.
        </p>
      </Dialog>
    </div>
  )
}
