import { Database, Download, Home } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { BANK, BANK_BY_ID } from "./domain/bank"
import { BANK_NOTICE } from "./data/questions"
import { createSession, finishSession, MODE_LABEL, seenQuestionIds } from "./domain/session"
import type { Mode, Question, Session } from "./domain/types"
import { AnswerReview } from "./ui/AnswerReview"
import { Builder, type BuilderMode } from "./ui/Builder"
import { Dialog, Emblem, Notice } from "./ui/components"
import { Dashboard } from "./ui/Dashboard"
import { DataView } from "./ui/DataView"
import { Intro } from "./ui/Intro"
import { ReportView } from "./ui/ReportView"
import { SessionView } from "./ui/SessionView"
import { useAppState } from "./ui/useAppState"

export type Screen =
  | { name: "home" }
  | { name: "builder"; mode: BuilderMode }
  | { name: "session" }
  | { name: "report"; resultId: string }
  | { name: "answers"; resultId: string; index: number }
  | { name: "data" }

export type StartRequest = { mode: Mode; title: string; questions: Question[]; limitMs?: number }

export function App() {
  const app = useAppState()
  const [screen, setScreen] = useState<Screen>({ name: "home" })
  const [pending, setPending] = useState<StartRequest>()
  const main = useRef<HTMLElement>(null)

  // Move o foco para o conteúdo ao trocar de tela, para leitores de tela e teclado.
  useEffect(() => {
    window.scrollTo({ top: 0 })
    main.current?.focus({ preventScroll: true })
  }, [screen.name, screen.name === "answers" ? screen.index : 0])

  const install = useInstallPrompt()
  const active = app.state.active

  function launch(request: StartRequest) {
    const session = createSession({ ...request, seen: seenQuestionIds(app.state.history), now: Date.now() })
    app.setState((state) => ({ ...state, active: session, preferences: { ...state.preferences, introSeen: true } }))
    setPending(undefined)
    setScreen({ name: "session" })
  }

  function start(request: StartRequest) {
    if (request.questions.length === 0) return
    if (active) return setPending(request)
    launch(request)
  }

  function updateSession(session: Session) {
    app.setState((state) => ({ ...state, active: session }))
  }

  function finish(session: Session, timedOut?: boolean) {
    const result = finishSession({ session, bank: BANK_BY_ID, now: Date.now(), elapsedMs: session.elapsedMs, timedOut })
    app.setState((state) => ({ ...state, active: undefined, history: [...state.history, result] }))
    setScreen({ name: "report", resultId: result.id })
  }

  const firstVisit = app.state.history.length === 0 && !active
  const result = "resultId" in screen ? app.state.history.find((item) => item.id === screen.resultId) : undefined

  return (
    <div className="app">
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <header className="topbar">
        <button type="button" className="brand" onClick={() => setScreen({ name: "home" })} aria-label="Operação PC-PE — início">
          <Emblem size={26} className="brand-mark" />
          <span className="brand-name">
            <span>
              Operação <strong>PC-PE</strong>
            </span>
            <small>Preparação para Agente</small>
          </span>
        </button>
        <nav className="topnav" aria-label="Principal">
          {install && (
            <button type="button" className="nav-link nav-install" onClick={install}>
              <Download size={16} aria-hidden="true" />
              <span>Instalar app</span>
            </button>
          )}
          <button type="button" className={`nav-link ${screen.name === "home" ? "is-active" : ""}`} onClick={() => setScreen({ name: "home" })}>
            <Home size={16} aria-hidden="true" />
            <span>Início</span>
          </button>
          <button type="button" className={`nav-link ${screen.name === "data" ? "is-active" : ""}`} onClick={() => setScreen({ name: "data" })}>
            <Database size={16} aria-hidden="true" />
            <span>Progresso e dados</span>
          </button>
        </nav>
      </header>

      {app.notice && (
        <div className="shell">
          <Notice tone="warn" onDismiss={app.dismissNotice}>
            {app.notice}
          </Notice>
        </div>
      )}

      <main id="conteudo" ref={main} tabIndex={-1} className={`main main-${screen.name}`}>
        {screen.name === "home" && firstVisit && <Intro bank={BANK} onStart={start} onBuild={(mode) => setScreen({ name: "builder", mode })} />}
        {screen.name === "home" && !firstVisit && (
          <Dashboard
            state={app.state}
            bank={BANK}
            onStart={start}
            onResume={() => setScreen({ name: "session" })}
            onDiscard={() => app.setState((state) => ({ ...state, active: undefined }))}
            onOpenBuilder={(mode) => setScreen({ name: "builder", mode })}
            onOpenReport={(resultId) => setScreen({ name: "report", resultId })}
            onGoal={(weeklyGoal) => app.setState((state) => ({ ...state, preferences: { ...state.preferences, weeklyGoal } }))}
          />
        )}
        {screen.name === "builder" && (
          <Builder
            initialMode={screen.mode}
            bank={BANK}
            history={app.state.history}
            onStart={start}
            onBack={() => setScreen({ name: "home" })}
          />
        )}
        {screen.name === "session" && active && (
          <SessionView
            key={active.id}
            session={active}
            bank={BANK_BY_ID}
            fontScale={app.state.preferences.fontScale ?? 1}
            onFontScale={(fontScale) => app.setState((state) => ({ ...state, preferences: { ...state.preferences, fontScale } }))}
            onChange={updateSession}
            onFinish={finish}
            onExit={() => setScreen({ name: "home" })}
          />
        )}
        {screen.name === "session" && !active && <MissingNotice onHome={() => setScreen({ name: "home" })} />}
        {screen.name === "report" && result && (
          <ReportView
            result={result}
            history={app.state.history}
            bank={BANK}
            onStart={start}
            onOpenBuilder={(mode) => setScreen({ name: "builder", mode })}
            onAnswers={(index) => setScreen({ name: "answers", resultId: result.id, index })}
            onHome={() => setScreen({ name: "home" })}
          />
        )}
        {screen.name === "answers" && result && (
          <AnswerReview
            result={result}
            index={screen.index}
            bank={BANK_BY_ID}
            flags={app.state.flags}
            onIndex={(index) => setScreen({ name: "answers", resultId: result.id, index })}
            onFlag={(flag) => app.setState((state) => ({ ...state, flags: [...state.flags, flag] }))}
            onBack={() => setScreen({ name: "report", resultId: result.id })}
          />
        )}
        {(screen.name === "report" || screen.name === "answers") && !result && <MissingNotice onHome={() => setScreen({ name: "home" })} />}
        {screen.name === "data" && <DataView state={app.state} bank={BANK_BY_ID} onReplace={(state) => app.setState(state)} />}
      </main>

      <footer className="footer">
        <p>{BANK_NOTICE}</p>
        <p>Seus dados ficam apenas neste navegador e não são sincronizados entre dispositivos.</p>
      </footer>

      <Dialog
        open={pending !== undefined}
        title="Substituir a sessão em andamento?"
        onClose={() => setPending(undefined)}
        actions={
          <>
            <button type="button" className="button button-ghost" onClick={() => setPending(undefined)}>
              Manter a atual
            </button>
            <button type="button" className="button button-danger" onClick={() => pending && launch(pending)}>
              Descartar e iniciar
            </button>
          </>
        }
      >
        {active && (
          <p>
            Você tem uma sessão de <strong>{MODE_LABEL[active.mode]}</strong> com {active.items.filter((item) => item.answer).length} de{" "}
            {active.items.length} questões respondidas. Iniciar outra descarta essas respostas.
          </p>
        )}
      </Dialog>
    </div>
  )
}

function MissingNotice(props: { onHome: () => void }) {
  return (
    <div className="shell empty">
      <p>Esta tela não está mais disponível.</p>
      <button type="button" className="button" onClick={props.onHome}>
        Voltar ao início
      </button>
    </div>
  )
}

type InstallEvent = Event & { prompt: () => Promise<void> }

// O navegador só oferece instalação quando o app atende aos critérios de PWA; antes disso o botão não aparece.
function useInstallPrompt() {
  const [event, setEvent] = useState<InstallEvent>()
  useEffect(() => {
    const offer = (incoming: Event) => {
      incoming.preventDefault()
      if ("prompt" in incoming) setEvent(incoming as InstallEvent)
    }
    const installed = () => setEvent(undefined)
    window.addEventListener("beforeinstallprompt", offer)
    window.addEventListener("appinstalled", installed)
    return () => {
      window.removeEventListener("beforeinstallprompt", offer)
      window.removeEventListener("appinstalled", installed)
    }
  }, [])
  if (!event) return undefined
  return () => event.prompt().then(() => setEvent(undefined))
}
