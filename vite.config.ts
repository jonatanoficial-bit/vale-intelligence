import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vitest/config'

const publicBasePath = process.env.VITE_PUBLIC_BASE_PATH ?? '/'

export default defineConfig({
  base: publicBasePath,
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'VALE INTELLIGENCE',
        short_name: 'VALE',
        description: 'Plataforma de proteção de identidade digital.',
        theme_color: '#08111f',
        background_color: '#08111f',
        display: 'standalone',
        lang: 'pt-BR',
        icons: [
          {
            src: 'favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,woff2}'],
        navigateFallbackDenylist: [/^\/relatorios/, /^\/exportacoes/],
        runtimeCaching: [],
      },
    }),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    exclude: ['tests/e2e/**', 'node_modules/**', 'dist/**'],
    css: true,
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['src/test/**'],
    },
  },
})
