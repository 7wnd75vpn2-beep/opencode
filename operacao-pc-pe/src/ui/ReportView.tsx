import { ArrowRight, ListChecks, Repeat } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import type { StartRequest } from "../App"
import { byDifficulty, byDiscipline, confidenceGroups, insights, priorities, slowest, SMALL_SESSION, tally } from "../domain/analysis"
import { byBlock, EXAM } from "../domain/exam"
import { nextMission, type Mission } from "../domain/mission"
import { MODE_LABEL, pickBalanced, seenQuestionIds } from "../domain/session"
import { DIFFICULTY_LABEL, type Question, type SessionResult } from "../domain/types"
import type { BuilderMode } from "./Builder"
import { ConfidenceMatrix, DisciplineRows, Legend, ScoreRing } from "./charts"
import { formatDate, formatDuration, Notice, percent, SampleNote, spokenDuration } from "./components"

const STAGES = ["Resultado geral", "Por matéria", "Confiança", "Prioridades", "Próxima missão"] as const

/** Relatórios já abertos voltam completos, sem repetir a revelação. */
const opened = new Set<string>()

export function ReportView(props: {
  result: SessionResult
  history: SessionResult[]
  bank: Question[]
  onStart: (request: StartRequest) => void
  onOpenBuilder: (mode: BuilderMode) => void
  onAnswers: (index: number) => void
  onHome: () => void
}) {
  const result = props.result
  const [revealed, setRevealed] = useState(opened.has(result.id) ? STAGES.length : 1)
  const stageRefs = useRef<(HTMLElement | null)[]>([])
  useEffect(() => {
    if (revealed === STAGES.length) opened.add(result.id)
  }, [revealed, result.id])

  const attempts = result.attempts
  const totals = tally(attempts)
  const groups = confidenceGroups(attempts)
  const counts = {
    firme: groups.firme.length,
    confirmar: groups.confirmar.length,
    prioritario: groups.prioritario.length,
    reforcar: groups.reforcar.length,
    "sem-confianca": groups["sem-confianca"].length,
    branco: groups.branco.length,
  }
  const rated = counts.firme + counts.confirmar + counts.prioritario + counts.reforcar
  const lines = insights(attempts)
  const topics = priorities(attempts)
  const repeated = attempts.filter((attempt) => attempt.repeat)
  const fresh = attempts.filter((attempt) => !attempt.repeat)
  // A missão considera todo o histórico, inclusive esta sessão.
  const mission = nextMission(props.history, props.bank, Date.now())
  const blocks = byBlock(attempts).filter((block) => block.total > 0)
  const difficulties = byDifficulty(attempts)
  const timed = attempts.filter((attempt) => (attempt.timeMs ?? 0) > 0)
  const averageTime = timed.length ? timed.reduce((sum, attempt) => sum + (attempt.timeMs ?? 0), 0) / timed.length : undefined
  const slow = slowest(attempts)
  const idealTime = result.limitMs ? result.limitMs / attempts.length : undefined

  function reveal(next: number) {
    setRevealed(next)
    requestAnimationFrame(() => stageRefs.current[next - 1]?.focus())
  }

  function startMission(target: Mission) {
    if (target.kind === "simulado") return props.onOpenBuilder("simulado")
    if (target.kind === "revisao")
      return props.onStart({
        mode: "revisao",
        title: "Revisão dos pontos fracos",
        questions: target.questionIds.flatMap((id) => props.bank.filter((question) => question.id === id)),
      })
    props.onStart({
      mode: "treino",
      title: `Treino · ${target.disciplina}`,
      questions: pickBalanced(
        props.bank.filter((question) => question.disciplina === target.disciplina),
        5,
        seenQuestionIds(props.history),
      ),
    })
  }

  const stage = (position: number) => ({
    ref: (element: HTMLElement | null) => {
      stageRefs.current[position - 1] = element
    },
    tabIndex: -1,
    className: `report-stage ${position === revealed ? "is-new" : ""}`,
    "aria-labelledby": `stage-${position}`,
  })

  return (
    <div className="shell report">
      <header className="report-head">
        <p className="eyebrow">
          {MODE_LABEL[result.mode]} · {formatDate(result.finishedAt)}
        </p>
        <h1 className="page-title">Seu relatório</h1>
        <ol className="stage-track" aria-label="Etapas do relatório">
          {STAGES.map((label, index) => (
            <li key={label} className={index < revealed ? "is-done" : ""} aria-current={index === revealed - 1 ? "step" : undefined}>
              <span className="stage-num">{index + 1}</span>
              <span className="stage-label">{label}</span>
            </li>
          ))}
        </ol>
      </header>

      <section {...stage(1)}>
        <h2 id="stage-1" className="stage-title">
          <span className="stage-index">01</span> Resultado geral
        </h2>
        {result.timedOut && (
          <Notice tone="warn">O tempo de prova acabou e o simulado foi entregue automaticamente com as respostas marcadas até ali.</Notice>
        )}
        <div className="overview">
          <div className="overview-ring">
            <ScoreRing tally={totals} />
            <Legend
              items={[
                { label: "Acertos", className: "seg-correct", value: String(totals.correct) },
                { label: "Erros", className: "seg-wrong", value: String(totals.wrong) },
                { label: "Em branco", className: "seg-blank", value: String(totals.blank) },
              ]}
            />
          </div>
          <div className="overview-text">
            <ul className="insights">
              {lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <dl className="facts">
              <div>
                <dt>Pontuação de estudo</dt>
                <dd>
                  {totals.points} <span className="muted">de {totals.total}</span>
                </dd>
              </div>
              <div>
                <dt>Aproveitamento</dt>
                <dd>{percent(totals.rate)}</dd>
              </div>
              <div>
                <dt>Tempo utilizado</dt>
                <dd>{spokenDuration(result.durationMs)}</dd>
              </div>
              {averageTime !== undefined && (
                <div>
                  <dt>Média por questão</dt>
                  <dd>{formatDuration(averageTime)}</dd>
                </div>
              )}
            </dl>
            {blocks.length > 1 && (
              <div className="block-results">
                {blocks.map((block) => (
                  <div key={block.id} className="block-result">
                    <span className="block-id">{block.id}</span>
                    <span className="block-name">{block.nome}</span>
                    <span className="block-score">
                      {block.correct}
                      <span className="muted">/{block.total}</span>
                    </span>
                  </div>
                ))}
              </div>
            )}
            <p className="fine-print">
              Pontuação de estudo: 1 ponto por acerto, 0 por erro ou em branco
              {result.mode === "prova" ? `, como informado para a prova objetiva de Agente. ${EXAM.fonte}` : ". Confira a regra oficial no edital."} Notas
              mínimas e de corte não são estimadas.
            </p>
            {totals.total < SMALL_SESSION && (
              <SampleNote>Com {totals.total} questões, a amostra ainda é pequena. Use o resultado como pista, não como conclusão.</SampleNote>
            )}
            {repeated.length > 0 && (
              <SampleNote>
                {repeated.length} de {totals.total} questões já tinham aparecido antes. Inéditas: {tally(fresh).correct} de {fresh.length}. Repetidas:{" "}
                {tally(repeated).correct} de {repeated.length}.
              </SampleNote>
            )}
          </div>
        </div>
        {revealed === 1 && <NextButton label={STAGES[1]} onClick={() => reveal(2)} onAll={() => reveal(STAGES.length)} />}
      </section>

      {revealed >= 2 && (
        <section {...stage(2)}>
          <h2 id="stage-2" className="stage-title">
            <span className="stage-index">02</span> Distribuição por matéria
          </h2>
          <DisciplineRows rows={byDiscipline(attempts)} />
          {difficulties.length > 1 && (
            <>
              <h3 className="subhead">Por dificuldade</h3>
              <DisciplineRows
                rows={difficulties.map((row) => ({ ...row, disciplina: DIFFICULTY_LABEL[row.dificuldade], small: row.total < 3 }))}
              />
            </>
          )}
          <Legend
            items={[
              { label: "Acertos", className: "seg-correct" },
              { label: "Erros", className: "seg-wrong" },
              { label: "Em branco", className: "seg-blank" },
            ]}
          />
          {revealed === 2 && <NextButton label={STAGES[2]} onClick={() => reveal(3)} onAll={() => reveal(STAGES.length)} />}
        </section>
      )}

      {revealed >= 3 && (
        <section {...stage(3)}>
          <h2 id="stage-3" className="stage-title">
            <span className="stage-index">03</span> Análise de confiança
          </h2>
          {rated === 0 ? (
            <p className="lede">
              Você não indicou confiança em nenhuma resposta. Na próxima sessão, marque “Tenho certeza”, “Estou em dúvida” ou “Foi um chute” para
              descobrir erros que o placar sozinho não mostra.
            </p>
          ) : (
            <>
              <p className="lede">
                O placar mostra se você acertou. A confiança mostra se você <em>sabia</em>. Veja onde cada resposta caiu:
              </p>
              <ConfidenceMatrix counts={counts} />
              {rated < 6 && <SampleNote>Só {rated} respostas com confiança informada — poucas para tirar conclusões firmes.</SampleNote>}
            </>
          )}
          {(counts["sem-confianca"] > 0 || counts.branco > 0) && (
            <p className="fine-print">
              Fora da análise: {counts["sem-confianca"]} respondidas sem confiança informada e {counts.branco} em branco.
            </p>
          )}
          {revealed === 3 && <NextButton label={STAGES[3]} onClick={() => reveal(4)} onAll={() => reveal(STAGES.length)} />}
        </section>
      )}

      {revealed >= 4 && (
        <section {...stage(4)}>
          <h2 id="stage-4" className="stage-title">
            <span className="stage-index">04</span> Prioridades de revisão
          </h2>
          {topics.length === 0 ? (
            <p className="lede">Nesta sessão, nenhum tema ficou pendente: todas as respostas estavam certas e nenhuma foi marcada como insegura.</p>
          ) : (
            <ol className="priorities">
              {topics.slice(0, 5).map((topic, index) => (
                <li key={`${topic.disciplina}-${topic.tema}`} className={index === 0 ? "is-top" : ""}>
                  <span className="priority-rank">{index + 1}</span>
                  <div>
                    <p className="priority-name">
                      {topic.tema} <span className="muted">· {topic.disciplina}</span>
                    </p>
                    <p className="priority-reason">{topic.reason}</p>
                  </div>
                </li>
              ))}
            </ol>
          )}
          {slow.length > 0 && (
            <div className="slow">
              <h3 className="subhead">Onde você gastou mais tempo</h3>
              <ul className="slow-list">
                {slow.map((attempt) => (
                  <li key={attempt.questionId}>
                    <button type="button" className="slow-item" onClick={() => props.onAnswers(attempts.indexOf(attempt))}>
                      <span className="slow-time">{formatDuration(attempt.timeMs ?? 0)}</span>
                      <span className="slow-name">
                        {attempt.tema} <span className="muted">· {attempt.disciplina}</span>
                      </span>
                      <span className={`slow-verdict ${attempt.correct ? "is-right" : "is-miss"}`}>
                        {!attempt.answer ? "em branco" : attempt.correct ? "acertou" : "errou"}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              {idealTime !== undefined && (
                <p className="fine-print">No ritmo da prova, a referência é de {formatDuration(idealTime)} por questão.</p>
              )}
            </div>
          )}
          {revealed === 4 && <NextButton label={STAGES[4]} onClick={() => reveal(5)} />}
        </section>
      )}

      {revealed >= 5 && (
        <section {...stage(5)}>
          <h2 id="stage-5" className="stage-title">
            <span className="stage-index">05</span> Próxima missão
          </h2>
          {mission && (
            <div className="mission">
              <div>
                <p className="mission-title">{mission.title}</p>
                <p className="mission-reason">{mission.reason}</p>
                {mission.kind === "revisao" && (
                  <p className="fine-print">
                    <Repeat size={14} aria-hidden="true" /> São questões que você já viu. Acertar de novo é um bom sinal, mas não prova domínio do assunto.
                  </p>
                )}
              </div>
              <button type="button" className="button button-primary button-lg" onClick={() => startMission(mission)}>
                Iniciar próxima missão <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          )}
          <div className="report-actions">
            <button type="button" className="button" onClick={() => props.onAnswers(0)}>
              <ListChecks size={18} aria-hidden="true" /> Ver gabarito comentado
            </button>
            <button type="button" className="button button-ghost" onClick={props.onHome}>
              Ir para o painel
            </button>
          </div>
        </section>
      )}
    </div>
  )
}

function NextButton(props: { label: string; onClick: () => void; onAll?: () => void }) {
  return (
    <div className="stage-next">
      <button type="button" className="button" onClick={props.onClick}>
        Continuar: {props.label} <ArrowRight size={16} aria-hidden="true" />
      </button>
      {props.onAll && (
        <button type="button" className="text-button" onClick={props.onAll}>
          Mostrar tudo
        </button>
      )}
    </div>
  )
}
