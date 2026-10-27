import { AlertTriangle, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { useId, useState } from "react"
import { DIFFICULTY_LABEL, type Flag, type Question, type SessionResult } from "../domain/types"
import { formatDuration } from "./components"
import { Explanation } from "./Explanation"

const CONFIDENCE_TEXT = { certeza: "Tenho certeza", duvida: "Estou em dúvida", chute: "Foi um chute" } as const

export function AnswerReview(props: {
  result: SessionResult
  index: number
  bank: Map<string, Question>
  flags: Flag[]
  onIndex: (index: number) => void
  onFlag: (flag: Flag) => void
  onBack: () => void
}) {
  const items = props.result.items.filter((item) => props.bank.has(item.questionId))
  const index = Math.min(props.index, items.length - 1)
  const item = items[index]
  const question = item && props.bank.get(item.questionId)
  if (!item || !question) return null
  const flagged = props.flags.filter((flag) => flag.questionId === question.id)

  return (
    <div className="shell answers">
      <button type="button" className="back-link" onClick={props.onBack}>
        <ArrowLeft size={16} aria-hidden="true" /> Voltar ao relatório
      </button>
      <header className="page-head">
        <p className="eyebrow">Gabarito comentado</p>
        <nav aria-label="Questões da sessão">
          <ol className="answer-strip">
            {items.map((entry, position) => {
              const entryQuestion = props.bank.get(entry.questionId)
              const verdict = !entry.answer ? "is-blank" : entry.answer === entryQuestion?.correta ? "is-right" : "is-miss"
              const spoken = verdict === "is-blank" ? "em branco" : verdict === "is-right" ? "acertou" : "errou"
              return (
                <li key={entry.questionId}>
                  <button
                    type="button"
                    className={`strip-cell ${verdict} ${position === index ? "is-current" : ""}`}
                    aria-current={position === index ? "step" : undefined}
                    aria-label={`Questão ${position + 1}: ${spoken}`}
                    onClick={() => props.onIndex(position)}
                  >
                    {position + 1}
                  </button>
                </li>
              )
            })}
          </ol>
        </nav>
      </header>

      <article className="question question-review">
        <header className="question-meta">
          <span className="meta-discipline">{question.disciplina}</span>
          <span className="meta-sep" aria-hidden="true">
            /
          </span>
          <span className="meta-theme">{question.tema}</span>
          <span className={`badge badge-${question.dificuldade}`}>{DIFFICULTY_LABEL[question.dificuldade]}</span>
          {item.repeat && <span className="badge">já vista</span>}
          {item.marked && <span className="badge">marcada</span>}
          {item.answer && item.confidence && <span className="badge">{CONFIDENCE_TEXT[item.confidence]}</span>}
          {(item.timeMs ?? 0) > 0 && <span className="badge">{formatDuration(item.timeMs ?? 0)}</span>}
        </header>
        <h1 className="question-text">
          <span className="sr-only">Questão {index + 1}: </span>
          {question.enunciado.split("\n\n").map((paragraph, position, all) => (
            <span key={position} className={`question-paragraph ${all.length > 1 && position === 0 ? "is-support" : ""}`}>
              {paragraph}
            </span>
          ))}
        </h1>
        <Explanation question={question} item={item} headingLevel={2} />
        <FlagForm key={question.id} questionId={question.id} count={flagged.length} onFlag={props.onFlag} />
      </article>

      <nav className="pager" aria-label="Navegar no gabarito">
        <button type="button" className="button button-ghost" disabled={index === 0} onClick={() => props.onIndex(index - 1)}>
          <ChevronLeft size={18} aria-hidden="true" /> Anterior
        </button>
        <span className="muted">
          {index + 1} de {items.length}
        </span>
        <button type="button" className="button button-ghost" disabled={index === items.length - 1} onClick={() => props.onIndex(index + 1)}>
          Próxima <ChevronRight size={18} aria-hidden="true" />
        </button>
      </nav>
    </div>
  )
}

function FlagForm(props: { questionId: string; count: number; onFlag: (flag: Flag) => void }) {
  const [open, setOpen] = useState(false)
  const [note, setNote] = useState("")
  const [saved, setSaved] = useState(false)
  const noteId = useId()

  if (saved || (props.count > 0 && !open))
    return (
      <p className="flag-saved" role="status">
        <AlertTriangle size={16} aria-hidden="true" />
        Sinalização salva neste navegador{props.count > 1 ? ` (${props.count} registros)` : ""}. Você pode exportá-la em “Progresso e dados”. Ela
        não é enviada automaticamente para ninguém.
      </p>
    )

  if (!open)
    return (
      <button type="button" className="text-button flag-open" onClick={() => setOpen(true)}>
        <AlertTriangle size={16} aria-hidden="true" /> Esta questão parece ter um problema
      </button>
    )

  return (
    <form
      className="flag-form"
      onSubmit={(event) => {
        event.preventDefault()
        props.onFlag({ id: `f-${Date.now().toString(36)}`, questionId: props.questionId, note: note.trim(), createdAt: Date.now() })
        setSaved(true)
      }}
    >
      <label htmlFor={noteId} className="field-label">
        O que parece errado? (opcional)
      </label>
      <textarea
        id={noteId}
        className="textarea"
        rows={3}
        value={note}
        onChange={(event) => setNote(event.target.value)}
        placeholder="Ex.: duas alternativas parecem corretas; a referência está desatualizada…"
      />
      <div className="flag-actions">
        <button type="button" className="button button-ghost" onClick={() => setOpen(false)}>
          Cancelar
        </button>
        <button type="submit" className="button">
          Salvar sinalização
        </button>
      </div>
    </form>
  )
}
