import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const env = (globalThis as { process?: { env?: Record<string, string> } }).process?.env ?? {}
const repoName = env.GITHUB_REPOSITORY?.split('/')[1]
const isGithubActions = env.GITHUB_ACTIONS === 'true'

export default defineConfig({
  // For GitHub Pages project sites, assets must be served from /<repo-name>/.
  // In local/dev mode we keep "/" so developer experience stays unchanged.
  base: isGithubActions && repoName ? `/${repoName}/` : '/',
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': new URL('./src', import.meta.url).pathname,
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
