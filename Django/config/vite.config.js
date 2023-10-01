import { defineConfig } from 'vite'
import { resolve } from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh()
  ],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },

  // 開発環境のmain.jsxが置いてある場所
  root: resolve('./frontend/src'),
  
  // Djangoでの静的ファイル配信設定である STATIC_URL と同じになるよう設定
  base: '/static/',

  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx']
  },

  build: {
    // コンパイル後の出力先。DJANGO_VITE_ASSET_PATHと一致させる
    outDir: resolve('./frontend/dist'),
    assetsDir: '',
    manifest: true,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve('./frontend/src/main.jsx'),
      },
      output: {
        chunkFileNames: undefined,
      },
    }
  },
  server: {
    host: 'localhost',
    port: 3000,
    open: false,
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
  },
})