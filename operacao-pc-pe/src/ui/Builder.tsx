import { ArrowLeft, ArrowRight, Minus, Plus } from "lucide-react"
import { useId, useState } from "react"
import type { StartRequest } from "../App"
import { themesOf } from "../domain/bank"
import { disciplinesWithQuestions, pickBalanced, SECONDS_PER_QUESTION, seenQuestionIds } from "../domain/session"
import type { Question, SessionResult } from "../domain/types"

export type BuilderMode = "treino" | "simulado"

const ALL = "__todas__"

export function Builder(props: {
  initialMode: BuilderMode
  bank: Question[]
  history: SessionResult[]
  onStart: (request: StartRequest) => void
  onBack: () => void
}) {
  const [mode, setMode] = useState<BuilderMode>(props.initialMode)
  const [discipline, setDiscipline] = useState(ALL)
  const [theme, setTheme] = useState(ALL)
  const [count, setCount] = useState(props.initialMode === "simulado" ? 20 : 5)
  const ids = { discipline: useId(), theme: useId(), count: useId() }
  const seen = seenQuestionIds(props.history)
  const disciplines = disciplinesWithQuestions(props.bank)
  const byDiscipline = props.bank.filter((question) => discipline === ALL || question.disciplina === discipline)
  const themes = themesOf(byDiscipline)
  const pool = byDiscipline.filter((question) => theme === ALL || question.tema === theme)
  const unseen = pool.filter((question) => !seen.has(question.id)).length
  const size = Math.min(Math.max(1, count), pool.length)
  const repeats = Math.max(0, size - unseen)

  function changeDiscipline(value: string) {
    setDiscipline(value)
    setTheme(ALL)
  }

  function submit() {
    const name = theme !== ALL ? theme : discipline !== ALL ? discipline : "Todas as disciplinas"
    props.onStart({
      mode,
      title: `${mode === "treino" ? "Treino" : "Simulado"} · ${name}`,
      questions: pickBalanced(pool, size, seen),
    })
  }

  return (
    <div className="shell builder">
      <button type="button" className="back-link" onClick={props.onBack}>
        <ArrowLeft size={16} aria-hidden="true" /> Voltar
      </button>
      <header className="page-head">
        <p className="eyebrow">Montar sessão</p>
        <h1 className="page-title">Escolha o que treinar</h1>
      </header>

      <div className="builder-grid">
        <form
          className="panel builder-form"
          onSubmit={(event) => {
            event.preventDefault()
            submit()
          }}
        >
          <fieldset className="mode-switch">
            <legend className="field-label">Formato</legend>
            {(
              [
                ["treino", "Treino dirigido", "Correção logo após confirmar cada resposta."],
                ["simulado", "Simulado", "Cronômetro, navegação livre e gabarito só no final."],
              ] as const
            ).map(([value, label, hint]) => (
              <label key={value} className={`mode-option ${mode === value ? "is-selected" : ""}`}>
                <input type="radio" name="mode" value={value} checked={mode === value} onChange={() => setMode(value)} />
                <span className="mode-label">{label}</span>
                <span className="mode-hint">{hint}</span>
              </label>
            ))}
          </fieldset>

          <div className="field">
            <label className="field-label" htmlFor={ids.discipline}>
              Matéria
            </label>
            <select id={ids.discipline} className="select" value={discipline} onChange={(event) => changeDiscipline(event.target.value)}>
              <option value={ALL}>Todas as disciplinas</option>
              {disciplines.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label className="field-label" htmlFor={ids.theme}>
              Tema
            </label>
            <select id={ids.theme} className="select" value={theme} onChange={(event) => setTheme(event.target.value)}>
              <option value={ALL}>Todos os temas</option>
              {themes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label className="field-label" htmlFor={ids.count}>
              Quantidade de questões
            </label>
            <div className="stepper">
              <button type="button" className="icon-button" onClick={() => setCount(Math.max(1, size - 1))} aria-label="Diminuir quantidade">
                <Minus size={16} aria-hidden="true" />
              </button>
              <input
                id={ids.count}
                className="stepper-input"
                type="number"
                inputMode="numeric"
                min={1}
                max={pool.length}
                value={size}
                onChange={(event) => setCount(Number(event.target.value) || 1)}
              />
              <button type="button" className="icon-button" onClick={() => setCount(Math.min(pool.length, size + 1))} aria-label="Aumentar quantidade">
                <Plus size={16} aria-hidden="true" />
              </button>
            </div>
          </div>

          <button type="submit" className="button button-primary button-lg" disabled={pool.length === 0}>
            Iniciar {mode === "treino" ? "treino" : "simulado"}
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </form>

        <aside className="panel panel-quiet builder-summary" aria-live="polite">
          <p className="eyebrow">Resumo</p>
          <p className="summary-big">
            {size} <span>{size === 1 ? "questão" : "questões"}</span>
          </p>
          <ul className="summary-list">
            <li>
              Disponíveis neste filtro: <strong>{pool.length}</strong>
            </li>
            <li>
              Inéditas para você: <strong>{unseen}</strong>
            </li>
            <li>
              Tempo estimado: <strong>~{Math.ceil((size * SECONDS_PER_QUESTION) / 60)} min</strong>
            </li>
          </ul>
          {count > pool.length && (
            <p className="sample-note">Este filtro tem só {pool.length} questões. Nenhuma será repetida dentro da sessão para completar o número.</p>
          )}
          {repeats > 0 && (
            <p className="sample-note">
              {repeats} {repeats === 1 ? "questão já apareceu" : "questões já apareceram"} em sessões anteriores. Elas serão identificadas como
              repetidas.
            </p>
          )}
        </aside>
      </div>
    </div>
  )
}
