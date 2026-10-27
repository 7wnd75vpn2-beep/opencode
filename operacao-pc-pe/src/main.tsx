import "@fontsource-variable/archivo/wdth.css"
import "@fontsource-variable/source-serif-4"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App"
import "./styles/app.css"

const root = document.getElementById("root")
if (root)
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )

// Offline support for the installed app. Sandboxed previews refuse service workers; the app works the same without one.
if (import.meta.env.PROD && "serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js").catch(() => undefined)
