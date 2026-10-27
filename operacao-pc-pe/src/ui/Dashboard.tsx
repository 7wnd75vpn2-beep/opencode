import { ArrowRight, Gauge, History, PlayCircle, Repeat, SlidersHorizontal, Timer, Trash2 } from "lucide-react"
import { useId, useState } from "react"
import type { StartRequest } from "../App"
import { answeredThisWeek, evolution, reviewQueue, SMALL_DISCIPLINE, tally } from "../domain/analysis"
import { nextMission, REVIEW_SIZE } from "../domain/mission"
import { DIAGNOSTIC_SIZE, disciplinesWithQuestions, MODE_LABEL, pickBalanced, seenQuestionIds } from "../domain/session"
import type { AppState, Question } from "../domain/types"
import type { BuilderMode } from "./Builder"
import { EvolutionChart } from "./charts"
import { Dialog, formatDate, percent, ProgressBar, SampleNote, spokenDuration } from "./components"

const GOALS = [20, 40, 60, 100, 150]

export function Dashboard(props: {
  state: AppState
  bank: Question[]
  onStart: (request: StartRequest) => void
  onResume: () => void
  onDiscard: () => void
  onOpenBuilder: (mode: BuilderMode) => void
  onOpenReport: (resultId: string) => void
  onGoal: (goal: number) => void
}) {
  const [discarding, setDiscarding] = useState(false)
  const goalId = useId()
  const history = props.state.history
  const active = props.state.active
  const known = new Set(props.bank.map((question) => question.id))
  const queue = reviewQueue(history).filter((item) => known.has(item.questionId))
  const mission = nextMission(history, props.bank)
  const seen = seenQuestionIds(history)
  const points = evolution(history)
  const allAttempts = history.flatMap((result) => result.attempts)
  const week = answeredThisWeek(history, Date.now())
  const goal = props.state.preferences.weeklyGoal
  const unseen = props.bank.filter((question) => !seen.has(question.id)).length

  function startReview(ids: string[]) {
    props.onStart({
      mode: "revisao",
      title: "Revisão dos pontos fracos",
      questions: ids.flatMap((id) => props.bank.filter((question) => question.id === id)),
    })
  }

  function startMission() {
    if (!mission) return
    if (mission.kind === "revisao") return startReview(mission.questionIds)
    if (mission.kind === "simulado") return props.onOpenBuilder("simulado")
    props.onStart({
      mode: "treino",
      title: `Treino · ${mission.disciplina}`,
      questions: pickBalanced(
        props.bank.filter((question) => question.disciplina === mission.disciplina),
        5,
        seen,
      ),
    })
  }

  return (
    <div className="shell dashboard">
      <header className="page-head">
        <p className="eyebrow">Painel</p>
        <h1 className="page-title">Seu próximo passo</h1>
      </header>

      <div className="dash-hero">
        {active ? (
          <section className="hero-card hero-resume" aria-labelledby="resume-title">
            <p className="eyebrow">Sessão interrompida</p>
            <h2 id="resume-title" className="hero-title">
              {active.title}
            </h2>
            <p className="hero-text">
              {MODE_LABEL[active.mode]} · {active.items.filter((item) => item.answer).length} de {active.items.length} respondidas ·{" "}
              {spokenDuration(active.elapsedMs)} de sessão
            </p>
            <ProgressBar
              value={active.items.filter((item) => item.answer).length}
              max={active.items.length}
              label="Progresso da sessão interrompida"
            />
            <div className="hero-actions">
              <button type="button" className="button button-primary button-lg" onClick={props.onResume}>
                <PlayCircle size={18} aria-hidden="true" /> Continuar de onde parei
              </button>
              <button type="button" className="button button-ghost" onClick={() => setDiscarding(true)}>
                <Trash2 size={16} aria-hidden="true" /> Descartar
              </button>
            </div>
          </section>
        ) : (
          mission && (
            <section className="hero-card" aria-labelledby="mission-title">
              <p className="eyebrow">Próxima revisão recomendada</p>
              <h2 id="mission-title" className="hero-title">
                {mission.title}
              </h2>
              <p className="hero-text">{mission.reason}</p>
              <div className="hero-actions">
                <button type="button" className="button button-primary button-lg" onClick={startMission}>
                  Iniciar <ArrowRight size={18} aria-hidden="true" />
                </button>
              </div>
            </section>
          )
        )}

        <section className="panel goal" aria-labelledby="goal-title">
          <div className="goal-head">
            <h2 id="goal-title" className="panel-title">
              Meta da semana
            </h2>
            <label className="sr-only" htmlFor={goalId}>
              Meta semanal de questões
            </label>
            <select id={goalId} className="select select-sm" value={goal} onChange={(event) => props.onGoal(Number(event.target.value))}>
              {[...new Set([...GOALS, goal])]
                .sort((a, b) => a - b)
                .map((value) => (
                  <option key={value} value={value}>
                    {value} questões
                  </option>
                ))}
            </select>
          </div>
          <p className="goal-number">
            {week}
            <span> / {goal}</span>
          </p>
          <ProgressBar value={week} max={goal} label="Progresso da meta semanal" />
          <p className="fine-print">Questões respondidas desde segunda-feira, em sessões concluídas.</p>
        </section>
      </div>

      <section className="quick" aria-labelledby="quick-title">
        <h2 id="quick-title" className="section-title">
          Começar uma sessão
        </h2>
        <div className="quick-grid">
          <button
            type="button"
            className="quick-item"
            onClick={() =>
              props.onStart({ mode: "diagnostico", title: "Novo diagnóstico", questions: pickBalanced(props.bank, DIAGNOSTIC_SIZE, seen) })
            }
          >
            <Gauge size={20} aria-hidden="true" />
            <span className="quick-name">Diagnóstico</span>
            <span className="quick-hint">
              {Math.min(DIAGNOSTIC_SIZE, props.bank.length)} questões variadas{unseen < DIAGNOSTIC_SIZE ? ` · ${unseen} inéditas` : ""}
            </span>
          </button>
          <button type="button" className="quick-item" onClick={() => props.onOpenBuilder("treino")}>
            <SlidersHorizontal size={20} aria-hidden="true" />
            <span className="quick-name">Treino dirigido</span>
            <span className="quick-hint">Matéria, tema e quantidade</span>
          </button>
          <button type="button" className="quick-item" onClick={() => props.onOpenBuilder("simulado")}>
            <Timer size={20} aria-hidden="true" />
            <span className="quick-name">Simulado</span>
            <span className="quick-hint">Gabarito só no final</span>
          </button>
          <button
            type="button"
            className="quick-item"
            disabled={queue.length === 0}
            onClick={() => startReview(queue.slice(0, REVIEW_SIZE).map((item) => item.questionId))}
          >
            <Repeat size={20} aria-hidden="true" />
            <span className="quick-name">Revisão dos pontos fracos</span>
            <span className="quick-hint">
              {queue.length === 0 ? "Nada pendente agora" : `${queue.length} ${queue.length === 1 ? "questão pendente" : "questões pendentes"}`}
            </span>
          </button>
        </div>
      </section>

      <div className="dash-grid">
        <section className="panel" aria-labelledby="evolution-title">
          <h2 id="evolution-title" className="panel-title">
            Evolução do aproveitamento
          </h2>
          {points.length === 0 ? (
            <div className="empty-chart">
              <p>O gráfico aparece depois da primeira sessão concluída. Nada aqui é preenchido com dados de exemplo.</p>
            </div>
          ) : (
            <EvolutionChart points={points} />
          )}
          {points.length > 0 && points.length < 3 && <SampleNote>Com {points.length} {points.length === 1 ? "sessão" : "sessões"}, ainda não dá para falar em tendência.</SampleNote>}
        </section>

        <section className="panel" aria-labelledby="disciplines-title">
          <h2 id="disciplines-title" className="panel-title">
            Desempenho por matéria
          </h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Matéria</th>
                <th scope="col">Respondidas</th>
                <th scope="col">Inéditas</th>
                <th scope="col">Repetidas</th>
              </tr>
            </thead>
            <tbody>
              {disciplinesWithQuestions(props.bank).map((disciplina) => {
                const subset = allAttempts.filter((attempt) => attempt.disciplina === disciplina)
                const answered = subset.filter((attempt) => attempt.answer).length
                const fresh = tally(subset.filter((attempt) => !attempt.repeat))
                const repeated = tally(subset.filter((attempt) => attempt.repeat))
                return (
                  <tr key={disciplina}>
                    <th scope="row">
                      {disciplina}
                      {subset.length > 0 && subset.length < SMALL_DISCIPLINE && <span className="tag">amostra pequena</span>}
                    </th>
                    <td>{answered}</td>
                    <td>{fresh.total ? `${percent(fresh.rate)} (${fresh.correct}/${fresh.total})` : "—"}</td>
                    <td>{repeated.total ? `${percent(repeated.rate)} (${repeated.correct}/${repeated.total})` : "—"}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <p className="fine-print">Repetidas são questões que você já tinha visto. Acertá-las indica memória da questão, não necessariamente domínio do tema.</p>
        </section>

        <section className="panel" aria-labelledby="pending-title">
          <h2 id="pending-title" className="panel-title">
            Pendentes de revisão <span className="count">{queue.length}</span>
          </h2>
          {queue.length === 0 ? (
            <p className="muted">Nenhuma questão pendente. Erros, acertos inseguros e itens marcados aparecem aqui.</p>
          ) : (
            <ul className="pending-list">
              {queue.slice(0, 6).map((item) => {
                const question = props.bank.find((entry) => entry.id === item.questionId)
                return (
                  <li key={item.questionId}>
                    <span className={`pending-dot ${item.score >= 100 ? "is-hot" : item.score >= 60 ? "is-warm" : ""}`} aria-hidden="true" />
                    <div>
                      <p className="pending-name">
                        {question?.tema} <span className="muted">· {question?.disciplina}</span>
                      </p>
                      <p className="pending-reason">{item.reason}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </section>

        <section className="panel" aria-labelledby="history-title">
          <h2 id="history-title" className="panel-title">
            <History size={18} aria-hidden="true" /> Histórico
          </h2>
          {history.length === 0 && <p className="muted">Nenhuma sessão concluída ainda.</p>}
          <ul className="history-list">
            {[...history].reverse().map((result) => {
              const totals = tally(result.attempts)
              return (
                <li key={result.id}>
                  <button type="button" className="history-item" onClick={() => props.onOpenReport(result.id)}>
                    <span className="history-main">
                      <span className="history-mode">{MODE_LABEL[result.mode]}</span>
                      <span className="muted">{formatDate(result.finishedAt)}</span>
                    </span>
                    <span className="history-score">
                      {totals.correct}/{totals.total}
                      <span className="muted"> · {spokenDuration(result.durationMs)}</span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </section>
      </div>

      <Dialog
        open={discarding}
        title="Descartar a sessão interrompida?"
        onClose={() => setDiscarding(false)}
        actions={
          <>
            <button type="button" className="button button-ghost" onClick={() => setDiscarding(false)}>
              Manter
            </button>
            <button
              type="button"
              className="button button-danger"
              onClick={() => {
                setDiscarding(false)
                props.onDiscard()
              }}
            >
              Descartar
            </button>
          </>
        }
      >
        <p>As respostas desta sessão serão apagadas e não entrarão no histórico.</p>
      </Dialog>
    </div>
  )
}
