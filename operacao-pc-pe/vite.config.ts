import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import type { Plugin } from "vite"

// Files in public/ are copied as-is and never appear in the bundle, so they are listed here for precaching.
const PUBLIC_FILES = ["manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "icons/apple-touch-icon.png"]

export default defineConfig({
  plugins: [react(), serviceWorker()],
  base: "./",
  test: { environment: "node" },
})

/** Emits sw.js with every built file precached. Hashed asset names change the file, so each build installs a fresh cache. */
function serviceWorker(): Plugin {
  return {
    name: "operacao-service-worker",
    apply: "build",
    generateBundle(_, bundle) {
      const files = ["./", ...[...Object.keys(bundle), ...PUBLIC_FILES].filter((file) => file !== "sw.js").map((file) => `./${file}`)]
      const version = Object.keys(bundle).sort().join("|").split("").reduce((hash, char) => (hash * 31 + char.charCodeAt(0)) >>> 0, 7).toString(36)
      this.emitFile({
        type: "asset",
        fileName: "sw.js",
        source: `const CACHE = "operacao-pcpe-${version}"
const FILES = ${JSON.stringify(files)}

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)).then(() => self.skipWaiting()))
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener("fetch", (event) => {
  const request = event.request
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return
  // Pages try the network first so a new version shows up online; everything else is hashed and served from cache.
  if (request.mode === "navigate") {
    event.respondWith(fetch(request).catch(() => caches.match("./", { ignoreSearch: true, ignoreVary: true })))
    return
  }
  event.respondWith(caches.match(request, { ignoreVary: true }).then((cached) => cached || fetch(request)))
})
`,
      })
    },
  }
}
