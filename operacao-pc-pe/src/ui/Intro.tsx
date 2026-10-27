import { ArrowRight, CalendarClock, Gauge, Scissors, ShieldCheck, Target, Timer } from "lucide-react"
import type { StartRequest } from "../App"
import { EXAM, examSize, pickExam } from "../domain/exam"
import { BOX_INTERVAL_DAYS } from "../domain/analysis"
import { DIAGNOSTIC_SIZE, disciplinesWithQuestions, pickBalanced, SECONDS_PER_QUESTION } from "../domain/session"
import type { Question } from "../domain/types"
import type { BuilderMode } from "./Builder"
import { Emblem } from "./components"

export function Intro(props: { bank: Question[]; onStart: (request: StartRequest) => void; onBuild: (mode: BuilderMode) => void }) {
  const diagnosticSize = Math.min(DIAGNOSTIC_SIZE, props.bank.length)
  const minutes = Math.ceil((diagnosticSize * SECONDS_PER_QUESTION) / 60)
  const disciplines = disciplinesWithQuestions(props.bank)
  const situations = props.bank.filter((question) => question.tipo === "situacao").length
  const hard = props.bank.filter((question) => question.dificuldade !== "media").length
  const examQuestions = examSize(props.bank)

  function startDiagnostic() {
    props.onStart({ mode: "diagnostico", title: "Diagnóstico inicial", questions: pickBalanced(props.bank, DIAGNOSTIC_SIZE, new Set()) })
  }

  function startExam() {
    props.onStart({ mode: "prova", title: EXAM.nome, questions: pickExam(props.bank, new Set()), limitMs: EXAM.tempoObjetivasMin * 60_000 })
  }

  return (
    <div className="landing">
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="insignia">
            <Emblem size={30} />
            <span>
              <strong>Agente de Polícia Civil</strong>
              <span>Pernambuco · formato {EXAM.banca}</span>
            </span>
          </p>
          <h1 id="hero-title" className="hero-headline">
            <span className="hero-muted">Você não precisa estudar tudo de novo.</span>
            <span>Precisa descobrir o que ainda está te derrubando.</span>
          </h1>
          <p className="hero-lede">
            Questões no estilo da prova, com caso prático, pegadinha de banca e comentário em cada alternativa. Você responde, diz o quanto tem
            certeza, e o sistema separa o que você sabe do que você só acha que sabe.
          </p>
          <div className="hero-ctas">
            <button type="button" className="button button-primary button-lg" onClick={startDiagnostic}>
              Fazer o diagnóstico
              <ArrowRight size={18} aria-hidden="true" />
            </button>
            <button type="button" className="button button-lg" onClick={() => props.onBuild("treino")}>
              Escolher matéria
            </button>
          </div>
          <p className="hero-note">
            {diagnosticSize} questões · ~{minutes} min · {disciplines.length} matérias · sem cadastro
          </p>
        </div>

        <figure className="hero-visual" aria-label="Exemplo de como uma questão aparece">
          <Emblem size={340} className="hero-watermark" />
          <div className="mock-card">
            <div className="mock-file" aria-hidden="true">
              <span>Ficha de treino · Caso 23</span>
              <span>P1 · Q. 23/60</span>
            </div>
            <span className="mock-stamp" aria-hidden="true">
              Analisar
            </span>
            <div className="mock-meta">
              <span className="mock-discipline">Direito Processual Penal</span>
              <span className="badge badge-hard">Difícil</span>
              <span className="badge">Situação hipotética</span>
            </div>
            <p className="mock-text">
              Policiais revistaram um jovem somente porque ele aparentou nervosismo ao ver a viatura. Encontraram drogas. Segundo o STJ…
            </p>
            <ul className="mock-alts" aria-hidden="true">
              <li className="is-struck">
                <span>A</span>A prova é lícita, pois o encontro da droga confirma a suspeita.
              </li>
              <li className="is-selected">
                <span>B</span>A busca é ilícita: nervosismo, isolado, não é fundada suspeita.
              </li>
              <li className="is-struck">
                <span>C</span>A busca é ato discricionário do policial em patrulhamento.
              </li>
            </ul>
            <div className="mock-confidence" aria-hidden="true">
              <span className="is-on">Tenho certeza</span>
              <span>Estou em dúvida</span>
              <span>Foi um chute</span>
            </div>
          </div>
          <figcaption className="mock-caption">
            <Scissors size={14} aria-hidden="true" /> Risque alternativas como no caderno de prova.
          </figcaption>
        </figure>
      </section>

      <section className="proof shell" aria-label="O que há no banco">
        <dl className="proof-grid">
          <div>
            <dt>Questões autorais</dt>
            <dd>{props.bank.length}</dd>
          </div>
          <div>
            <dt>Matérias do edital</dt>
            <dd>{disciplines.length}</dd>
          </div>
          <div>
            <dt>Casos práticos</dt>
            <dd>{situations}</dd>
          </div>
          <div>
            <dt>Difíceis ou desafio</dt>
            <dd>{Math.round((hard / props.bank.length) * 100)}%</dd>
          </div>
        </dl>
        <p className="proof-note">Toda alternativa tem comentário: por que está certa ou exatamente onde está o erro.</p>
      </section>

      <section className="features shell" aria-labelledby="features-title">
        <h2 id="features-title" className="section-heading">
          O que um caderno de questões comum não faz por você
        </h2>

        <article className="feature">
          <div className="feature-copy">
            <Target size={22} aria-hidden="true" />
            <h3>Separa o erro perigoso do erro bobo</h3>
            <p>
              Errar com certeza é sinal de conceito aprendido errado — é isso que derruba na prova. Acertar no chute não é saber. Cada resposta cai
              em um destes quadrantes, e a revisão começa pelo vermelho.
            </p>
          </div>
          <div className="feature-visual matrix-demo" aria-hidden="true">
            <span className="demo-axis demo-axis-x">Com certeza · Com dúvida</span>
            <div className="demo-grid">
              <span className="demo-cell tone-firm">Acertou e sabia</span>
              <span className="demo-cell tone-confirm">Acertou sem saber</span>
              <span className="demo-cell tone-priority">Errou com certeza</span>
              <span className="demo-cell tone-reinforce">Errou e desconfiava</span>
            </div>
          </div>
        </article>

        <article className="feature">
          <div className="feature-copy">
            <Timer size={22} aria-hidden="true" />
            <h3>Simulado no formato da prova</h3>
            <p>
              {examQuestions} questões divididas como na prova de Agente: {EXAM.blocos.map((bloco) => `${bloco.questoes} de ${bloco.nome}`).join(" e ")}.
              Relógio de verdade, que não pausa, gabarito só no final e relatório separado por bloco e por ritmo.
            </p>
            <button type="button" className="text-button" onClick={startExam}>
              Começar o simulado completo ({EXAM.tempoObjetivasMin / 60} h)
            </button>
          </div>
          <div className="feature-visual exam-demo" aria-hidden="true">
            {EXAM.blocos.map((bloco) => (
              <div key={bloco.id} className="exam-block" style={{ flexGrow: bloco.questoes }}>
                <strong>{bloco.id}</strong>
                <span>{bloco.nome}</span>
                <em>{bloco.questoes} questões</em>
              </div>
            ))}
          </div>
        </article>

        <article className="feature">
          <div className="feature-copy">
            <CalendarClock size={22} aria-hidden="true" />
            <h3>Revisão que volta na hora certa</h3>
            <p>
              Errou? A questão volta hoje. Acertou com dúvida? Amanhã. Acertou com certeza? Volta em uma semana para confirmar se ficou. Você não
              precisa lembrar o que revisar: o painel mostra.
            </p>
          </div>
          <ol className="feature-visual timeline-demo" aria-hidden="true">
            {[
              ["Errou", BOX_INTERVAL_DAYS[0]],
              ["Dúvida", BOX_INTERVAL_DAYS[1]],
              ["Certeza", BOX_INTERVAL_DAYS[3]],
              ["Firme", BOX_INTERVAL_DAYS[5]],
            ].map(([label, days]) => (
              <li key={String(label)}>
                <span className="timeline-dot" />
                <strong>{days === 0 ? "hoje" : `${days} ${days === 1 ? "dia" : "dias"}`}</strong>
                <span>{label}</span>
              </li>
            ))}
          </ol>
        </article>
      </section>

      <section className="exam-format shell" aria-labelledby="formato-title">
        <div className="exam-format-head">
          <Gauge size={20} aria-hidden="true" />
          <h2 id="formato-title" className="section-heading">
            Como é a prova objetiva de Agente
          </h2>
        </div>
        <div className="exam-format-grid">
          {EXAM.blocos.map((bloco) => (
            <div key={bloco.id} className="panel">
              <p className="eyebrow">
                {bloco.id} · {bloco.questoes} questões
              </p>
              <h3 className="panel-title">{bloco.nome}</h3>
              <p className="muted">{bloco.disciplinas.join(" · ")}</p>
            </div>
          ))}
          <div className="panel panel-quiet">
            <p className="eyebrow">Pontuação</p>
            <h3 className="panel-title">1 ponto por questão</h3>
            <p className="muted">Sem desconto por erro. A prova dura {EXAM.duracaoTotalMin / 60} h, incluindo a redação.</p>
          </div>
        </div>
        <p className="fine-print">
          <ShieldCheck size={14} aria-hidden="true" /> {EXAM.fonte} Ainda não cobrimos: {EXAM.lacunas.join("; ")}.
        </p>
      </section>

      <section className="final-cta shell" aria-label="Começar">
        <Emblem size={56} className="final-emblem" />
        <h2>Descubra em {minutes} minutos onde você está perdendo pontos.</h2>
        <button type="button" className="button button-primary button-lg" onClick={startDiagnostic}>
          Fazer o diagnóstico
          <ArrowRight size={18} aria-hidden="true" />
        </button>
        <p className="fine-print">
          Questões autorais. Material independente, sem vínculo com a PC-PE ou o Cebraspe. O escudo é a marca deste material, não um símbolo oficial da
          Polícia Civil. Seus dados ficam neste navegador.
        </p>
      </section>
    </div>
  )
}
