import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  // Projeto de páginas múltiplas (vanilla JS), sem framework de UI:
  // index.html  -> app de campo (técnicos)
  // admin.html  -> painel de administração
  root: '.',
  publicDir: 'public',

  server: {
    host: true,   // permite acessar via IP local (ex.: testar GPS/câmera no celular na mesma rede)
    port: 5173,
    open: true,
  },

  preview: {
    host: true,
    port: 4173,
  },

  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, 'admin.html'),
      },
    },
  },
});
