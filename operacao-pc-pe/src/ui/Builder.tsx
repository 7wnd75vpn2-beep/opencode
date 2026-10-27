import { ArrowLeft, ArrowRight, Minus, Plus } from "lucide-react"
import { useId, useState } from "react"
import type { StartRequest } from "../App"
import { themesOf } from "../domain/bank"
import { EXAM, examSize, pickExam } from "../domain/exam"
import { disciplinesWithQuestions, pickBalanced, SECONDS_PER_QUESTION, seenQuestionIds } from "../domain/session"
import { DIFFICULTIES, DIFFICULTY_LABEL, type Difficulty, type Question, type SessionResult } from "../domain/types"

export type BuilderMode = "treino" | "simulado" | "prova"

const ALL = "__todas__"
const EXAM_TIMES = [180, 210, 240]

const MODES: { value: BuilderMode; label: string; hint: string }[] = [
  { value: "prova", label: "Simulado PC-PE", hint: `${EXAM.blocos.map((bloco) => bloco.questoes).join(" + ")} questões, no formato da prova, com tempo real.` },
  { value: "treino", label: "Treino dirigido", hint: "Escolha matéria e tema. Correção logo após cada resposta." },
  { value: "simulado", label: "Simulado livre", hint: "Matéria e quantidade à sua escolha; gabarito só no final." },
]

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
  const [difficulty, setDifficulty] = useState<Difficulty | typeof ALL>(ALL)
  const [count, setCount] = useState(props.initialMode === "simulado" ? 20 : 10)
  const [examMinutes, setExamMinutes] = useState<number>(EXAM.tempoObjetivasMin)
  const ids = { discipline: useId(), theme: useId(), count: useId(), difficulty: useId(), time: useId() }
  const seen = seenQuestionIds(props.history)
  const disciplines = disciplinesWithQuestions(props.bank)
  const byDiscipline = props.bank.filter((question) => discipline === ALL || question.disciplina === discipline)
  const themes = themesOf(byDiscipline)
  const pool = byDiscipline
    .filter((question) => theme === ALL || question.tema === theme)
    .filter((question) => difficulty === ALL || question.dificuldade === difficulty)
  const isExam = mode === "prova"
  const size = isExam ? examSize(props.bank) : Math.min(Math.max(1, count), pool.length)
  const unseen = (isExam ? props.bank : pool).filter((question) => !seen.has(question.id)).length
  const repeats = Math.max(0, size - unseen)
  const minutes = isExam ? examMinutes : Math.ceil((size * SECONDS_PER_QUESTION) / 60)

  function changeDiscipline(value: string) {
    setDiscipline(value)
    setTheme(ALL)
  }

  function submit() {
    if (isExam)
      return props.onStart({ mode: "prova", title: EXAM.nome, questions: pickExam(props.bank, seen), limitMs: examMinutes * 60_000 })
    const name = theme !== ALL ? theme : discipline !== ALL ? discipline : "Todas as matérias"
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
        <h1 className="page-title">Como você quer treinar?</h1>
      </header>

      <div className="builder-grid">
        <form
          className="panel builder-form"
          onSubmit={(event) => {
            event.preventDefault()
            submit()
          }}
        >
          <fieldset className="mode-switch mode-switch-3">
            <legend className="field-label">Formato</legend>
            {MODES.map((option) => (
              <label key={option.value} className={`mode-option ${mode === option.value ? "is-selected" : ""}`}>
                <input type="radio" name="mode" value={option.value} checked={mode === option.value} onChange={() => setMode(option.value)} />
                <span className="mode-label">{option.label}</span>
                <span className="mode-hint">{option.hint}</span>
              </label>
            ))}
          </fieldset>

          {isExam ? (
            <div className="field">
              <label className="field-label" htmlFor={ids.time}>
                Tempo para as questões objetivas
              </label>
              <select id={ids.time} className="select" value={examMinutes} onChange={(event) => setExamMinutes(Number(event.target.value))}>
                {EXAM_TIMES.map((value) => (
                  <option key={value} value={value}>
                    {value / 60} h{value % 60 ? ` ${value % 60} min` : ""}
                    {value === EXAM.tempoObjetivasMin ? " (recomendado: sobra tempo para a redação)" : ""}
                    {value === EXAM.duracaoTotalMin ? " (tempo total da prova)" : ""}
                  </option>
                ))}
              </select>
              <p className="field-hint">O relógio é real: continua correndo se você sair da tela. Ao zerar, a prova é entregue automaticamente.</p>
            </div>
          ) : (
            <>
              <div className="field-row">
                <div className="field">
                  <label className="field-label" htmlFor={ids.discipline}>
                    Matéria
                  </label>
                  <select id={ids.discipline} className="select" value={discipline} onChange={(event) => changeDiscipline(event.target.value)}>
                    <option value={ALL}>Todas as matérias</option>
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
              </div>

              <div className="field-row">
                <div className="field">
                  <label className="field-label" htmlFor={ids.difficulty}>
                    Dificuldade
                  </label>
                  <select
                    id={ids.difficulty}
                    className="select"
                    value={difficulty}
                    onChange={(event) => setDifficulty(DIFFICULTIES.find((item) => item === event.target.value) ?? ALL)}
                  >
                    <option value={ALL}>Todas</option>
                    {DIFFICULTIES.map((item) => (
                      <option key={item} value={item}>
                        {DIFFICULTY_LABEL[item]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label className="field-label" htmlFor={ids.count}>
                    Quantidade
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
                    <button
                      type="button"
                      className="icon-button"
                      onClick={() => setCount(Math.min(pool.length, size + 1))}
                      aria-label="Aumentar quantidade"
                    >
                      <Plus size={16} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          <button type="submit" className="button button-primary button-lg" disabled={!isExam && pool.length === 0}>
            {isExam ? "Começar o simulado PC-PE" : mode === "treino" ? "Iniciar treino" : "Iniciar simulado"}
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </form>

        <aside className="panel panel-quiet builder-summary" aria-live="polite">
          <p className="eyebrow">Resumo</p>
          <p className="summary-big">
            {size} <span>{size === 1 ? "questão" : "questões"}</span>
          </p>
          <ul className="summary-list">
            {isExam ? (
              EXAM.blocos.map((bloco) => (
                <li key={bloco.id}>
                  {bloco.id} · {bloco.nome}: <strong>{bloco.questoes}</strong>
                </li>
              ))
            ) : (
              <li>
                Disponíveis neste filtro: <strong>{pool.length}</strong>
              </li>
            )}
            <li>
              Inéditas para você: <strong>{Math.min(unseen, size)}</strong>
            </li>
            <li>
              {isExam ? "Tempo de prova" : "Tempo estimado"}: <strong>{isExam ? `${Math.floor(minutes / 60)} h${minutes % 60 ? ` ${minutes % 60} min` : ""}` : `~${minutes} min`}</strong>
            </li>
          </ul>
          {!isExam && count > pool.length && (
            <p className="sample-note">Este filtro tem só {pool.length} questões. Nenhuma será repetida dentro da sessão para completar o número.</p>
          )}
          {repeats > 0 && (
            <p className="sample-note">
              {repeats} {repeats === 1 ? "questão já apareceu" : "questões já apareceram"} para você antes e serão marcadas como repetidas.
            </p>
          )}
          {isExam && <p className="fine-print">{EXAM.fonte}</p>}
        </aside>
      </div>
    </div>
  )
}
