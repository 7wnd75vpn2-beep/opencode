import { AlertTriangle, Download, HardDrive, ShieldCheck, Trash2, Upload } from "lucide-react"
import { useRef, useState } from "react"
import { BANK, BANK_ISSUES } from "../domain/bank"
import { EXAM } from "../domain/exam"
import { disciplinesWithQuestions } from "../domain/session"
import { EXPORT_APP, emptyState, exportState, importState } from "../domain/storage"
import type { AppState, Question } from "../domain/types"
import { BANK_NOTICE } from "../data/questions"
import { Dialog, formatDate, Notice } from "./components"

function download(name: string, text: string) {
  const url = URL.createObjectURL(new Blob([text], { type: "application/json" }))
  const link = document.createElement("a")
  link.href = url
  link.download = name
  link.click()
  URL.revokeObjectURL(url)
}

const stamp = () => new Date().toISOString().slice(0, 10)

export function DataView(props: { state: AppState; bank: Map<string, Question>; onReplace: (state: AppState) => void }) {
  const fileRef = useRef<HTMLInputElement>(null)
  const [candidate, setCandidate] = useState<AppState>()
  const [message, setMessage] = useState<{ tone: "info" | "warn"; text: string }>()
  const [resetting, setResetting] = useState(false)
  const flags = props.state.flags

  async function onFile(file: File | undefined) {
    if (!file) return
    const outcome = importState(await file.text())
    if (fileRef.current) fileRef.current.value = ""
    if ("error" in outcome) return setMessage({ tone: "warn", text: outcome.error })
    setMessage(undefined)
    setCandidate(outcome.state)
  }

  return (
    <div className="shell data">
      <header className="page-head">
        <p className="eyebrow">Progresso e dados</p>
        <h1 className="page-title">Seus dados, no seu navegador</h1>
        <p className="lede">
          Não há cadastro nem servidor. Tudo fica salvo apenas neste navegador e não é sincronizado entre dispositivos. Para trocar de aparelho ou
          guardar uma cópia, exporte o progresso.
        </p>
      </header>

      {message && (
        <Notice tone={message.tone} onDismiss={() => setMessage(undefined)}>
          {message.text}
        </Notice>
      )}

      <div className="data-grid">
        <section className="panel" aria-labelledby="backup-title">
          <h2 id="backup-title" className="panel-title">
            <HardDrive size={18} aria-hidden="true" /> Cópia do progresso
          </h2>
          <p className="muted">
            {props.state.history.length} sessões concluídas{props.state.active ? ", 1 em andamento" : ""} · {flags.length} sinalizações
          </p>
          <div className="button-row">
            <button
              type="button"
              className="button"
              onClick={() => download(`${EXPORT_APP}-progresso-${stamp()}.json`, exportState(props.state, Date.now()))}
            >
              <Download size={16} aria-hidden="true" /> Exportar progresso (JSON)
            </button>
            <button type="button" className="button button-ghost" onClick={() => fileRef.current?.click()}>
              <Upload size={16} aria-hidden="true" /> Importar progresso
            </button>
            <input
              ref={fileRef}
              hidden
              tabIndex={-1}
              aria-hidden="true"
              type="file"
              accept="application/json,.json"
              onChange={(event) => onFile(event.target.files?.[0])}
            />
          </div>
          <p className="fine-print">O arquivo é validado antes de ser aplicado. Importar substitui o progresso atual deste navegador.</p>
        </section>

        <section className="panel" aria-labelledby="flags-title">
          <h2 id="flags-title" className="panel-title">
            <AlertTriangle size={18} aria-hidden="true" /> Questões sinalizadas
          </h2>
          {flags.length === 0 ? (
            <p className="muted">Nenhuma sinalização. No gabarito comentado, use “Esta questão parece ter um problema”.</p>
          ) : (
            <ul className="flag-list">
              {flags.map((flag) => {
                const question = props.bank.get(flag.questionId)
                return (
                  <li key={flag.id}>
                    <p className="pending-name">
                      {question ? `${question.tema} · ${question.disciplina}` : flag.questionId}
                      <span className="muted"> · {formatDate(flag.createdAt)}</span>
                    </p>
                    <p className="pending-reason">{flag.note || "Sem comentário."}</p>
                  </li>
                )
              })}
            </ul>
          )}
          <div className="button-row">
            <button
              type="button"
              className="button"
              disabled={flags.length === 0}
              onClick={() =>
                download(
                  `${EXPORT_APP}-sinalizacoes-${stamp()}.json`,
                  JSON.stringify(
                    {
                      app: EXPORT_APP,
                      tipo: "sinalizacoes",
                      exportadoEm: new Date().toISOString(),
                      sinalizacoes: flags.map((flag) => ({
                        ...flag,
                        criadaEm: new Date(flag.createdAt).toISOString(),
                        enunciado: props.bank.get(flag.questionId)?.enunciado,
                      })),
                    },
                    null,
                    2,
                  ),
                )
              }
            >
              <Download size={16} aria-hidden="true" /> Exportar sinalizações
            </button>
          </div>
          <p className="fine-print">As sinalizações ficam neste navegador. Nada é enviado automaticamente para uma equipe.</p>
        </section>

        <section className="panel" aria-labelledby="bank-title">
          <h2 id="bank-title" className="panel-title">
            <ShieldCheck size={18} aria-hidden="true" /> Sobre o banco de questões
          </h2>
          <ul className="summary-list">
            <li>
              Questões ativas: <strong>{BANK.length}</strong> · bloqueadas pela validação: <strong>{BANK_ISSUES.length}</strong>
            </li>
            <li>
              Cargo: <strong>Agente de Polícia</strong> · Origem: <strong>autoral</strong> · Revisão: <strong>interna, sem revisão externa</strong>
            </li>
          </ul>
          <table className="table table-compact">
            <caption className="sr-only">Questões por matéria</caption>
            <tbody>
              {disciplinesWithQuestions(BANK).map((disciplina) => (
                <tr key={disciplina}>
                  <th scope="row">{disciplina}</th>
                  <td>{BANK.filter((question) => question.disciplina === disciplina).length}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="muted">{BANK_NOTICE}</p>
          <p className="fine-print">
            {EXAM.fonte} Ainda não cobrimos: {EXAM.lacunas.join("; ")}. Notas mínimas, de corte e pesos não são estimados.
          </p>
        </section>

        <section className="panel panel-quiet" aria-labelledby="reset-title">
          <h2 id="reset-title" className="panel-title">
            <Trash2 size={18} aria-hidden="true" /> Apagar tudo
          </h2>
          <p className="muted">Remove sessões, histórico, sinalizações e preferências deste navegador.</p>
          <button type="button" className="button button-danger" onClick={() => setResetting(true)}>
            Apagar meus dados
          </button>
        </section>
      </div>

      <Dialog
        open={candidate !== undefined}
        title="Substituir o progresso atual?"
        onClose={() => setCandidate(undefined)}
        actions={
          <>
            <button type="button" className="button button-ghost" onClick={() => setCandidate(undefined)}>
              Cancelar
            </button>
            <button
              type="button"
              className="button button-primary"
              onClick={() => {
                if (candidate) props.onReplace(candidate)
                setCandidate(undefined)
                setMessage({ tone: "info", text: "Progresso importado com sucesso." })
              }}
            >
              Importar
            </button>
          </>
        }
      >
        {candidate && (
          <p>
            O arquivo tem {candidate.history.length} sessões concluídas{candidate.active ? " e 1 em andamento" : ""} e {candidate.flags.length}{" "}
            sinalizações. O progresso atual deste navegador será substituído.
          </p>
        )}
      </Dialog>

      <Dialog
        open={resetting}
        title="Apagar todos os dados?"
        onClose={() => setResetting(false)}
        actions={
          <>
            <button type="button" className="button button-ghost" onClick={() => setResetting(false)}>
              Cancelar
            </button>
            <button
              type="button"
              className="button button-danger"
              onClick={() => {
                props.onReplace(emptyState())
                setResetting(false)
                setMessage({ tone: "info", text: "Dados apagados." })
              }}
            >
              Apagar
            </button>
          </>
        }
      >
        <p>Esta ação não pode ser desfeita. Se quiser guardar uma cópia, exporte o progresso antes.</p>
      </Dialog>
    </div>
  )
}
