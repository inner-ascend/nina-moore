import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Rewrite trailing-slash directory requests to index.html
// so /threshold/ serves public/threshold/index.html in dev,
// matching GitHub Pages behaviour in production.
const dirIndexRewrite = {
  name: 'dir-index-rewrite',
  apply: 'serve' as const,
  configureServer(server: any) {
    server.middlewares.use((req: any, _res: any, next: any) => {
      if (req.url && req.url !== '/' && req.url.endsWith('/')) {
        req.url = req.url + 'index.html'
      }
      next()
    })
  },
}

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), dirIndexRewrite],
  base: command === 'build' ? '/' : '/',
}))
