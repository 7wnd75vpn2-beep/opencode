import { ArrowRight, Compass, Gauge, SlidersHorizontal } from "lucide-react"
import { DIAGNOSTIC_SIZE, disciplinesWithQuestions, pickBalanced, SECONDS_PER_QUESTION } from "../domain/session"
import type { Question } from "../domain/types"
import type { StartRequest } from "../App"

export function Intro(props: { bank: Question[]; onStart: (request: StartRequest) => void; onBuild: () => void }) {
  const size = Math.min(DIAGNOSTIC_SIZE, props.bank.length)
  const minutes = Math.ceil((size * SECONDS_PER_QUESTION) / 60)
  const disciplines = disciplinesWithQuestions(props.bank)

  function startDiagnostic() {
    props.onStart({ mode: "diagnostico", title: "Diagnóstico inicial", questions: pickBalanced(props.bank, DIAGNOSTIC_SIZE, new Set()) })
  }

  return (
    <div className="intro shell">
      <section className="intro-hero" aria-labelledby="intro-title">
        <p className="eyebrow">Preparação para Agente de Polícia · PC-PE</p>
        <h1 id="intro-title" className="intro-title">
          <span>Você não precisa estudar tudo de novo.</span>
          <span className="intro-title-accent">Precisa descobrir o que ainda está te derrubando.</span>
        </h1>
        <p className="intro-lede">
          Responda, diga o quanto tem certeza e veja onde o seu conhecimento é firme — e onde ele só parece firme. Cada treino termina com a
          próxima revisão montada a partir das suas respostas.
        </p>
      </section>

      <section className="intro-choices" aria-label="Como começar">
        <article className="choice choice-primary">
          <div className="choice-top">
            <Gauge size={22} aria-hidden="true" />
            <h2>Fazer diagnóstico inicial</h2>
          </div>
          <dl className="spec">
            <div>
              <dt>Questões</dt>
              <dd>{size}</dd>
            </div>
            <div>
              <dt>Duração estimada</dt>
              <dd>~{minutes} min</dd>
            </div>
            <div>
              <dt>Disciplinas</dt>
              <dd>{disciplines.length}</dd>
            </div>
          </dl>
          <p className="choice-text">
            {disciplines.join(" · ")}. O gabarito aparece no final, junto com o relatório.
          </p>
          <button type="button" className="button button-primary button-lg" onClick={startDiagnostic}>
            Começar diagnóstico
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </article>

        <article className="choice">
          <div className="choice-top">
            <SlidersHorizontal size={22} aria-hidden="true" />
            <h2>Montar meu próprio treino</h2>
          </div>
          <p className="choice-text">Escolha matéria, tema e quantidade. Ou monte um simulado com cronômetro e gabarito só no final.</p>
          <button type="button" className="button button-lg" onClick={props.onBuild}>
            Escolher conteúdo
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </article>
      </section>

      <section className="intro-steps" aria-labelledby="como-funciona">
        <h2 id="como-funciona" className="section-title">
          <Compass size={18} aria-hidden="true" />
          Como funciona
        </h2>
        <ol className="steps">
          <li>
            <span className="step-num">01</span>
            <strong>Responda</strong>
            <span>Questões curtas de várias disciplinas, com cinco alternativas.</span>
          </li>
          <li>
            <span className="step-num">02</span>
            <strong>Indique sua confiança</strong>
            <span>“Tenho certeza”, “Estou em dúvida” ou “Foi um chute”. É opcional, mas é o que revela os erros escondidos.</span>
          </li>
          <li>
            <span className="step-num">03</span>
            <strong>Receba a próxima revisão</strong>
            <span>Errou com certeza? Isso vai para o topo. Acertou no chute? Vale confirmar.</span>
          </li>
        </ol>
        <p className="fine-print">
          Banco atual: {props.bank.length} questões autorais de fundamentos, ainda não conferidas contra o edital vigente. Sem cadastro: seus dados
          ficam neste navegador.
        </p>
      </section>
    </div>
  )
}
