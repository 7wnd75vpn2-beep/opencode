import { useEffect, useState } from "react"
import { loadState, saveState } from "../domain/storage"
import type { AppState } from "../domain/types"

function browserStorage() {
  try {
    return window.localStorage
  } catch {
    return undefined
  }
}

/** Estado do app persistido localmente a cada alteração. */
export function useAppState() {
  const [initial] = useState(() => loadState(browserStorage()))
  const [state, setState] = useState<AppState>(initial.state)
  const [saveFailed, setSaveFailed] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    setSaveFailed(!saveState(browserStorage(), state))
  }, [state])

  const message =
    initial.notice ?? (saveFailed ? "Não foi possível salvar o progresso neste navegador (armazenamento cheio ou bloqueado)." : undefined)

  return {
    state,
    setState,
    notice: dismissed ? undefined : message,
    dismissNotice: () => setDismissed(true),
  }
}
