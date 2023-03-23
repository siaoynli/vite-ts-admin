import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import viteCompression from 'vite-plugin-compression';
import progress from 'vite-plugin-progress'
import colors from 'picocolors'
import { createHtmlPlugin } from 'vite-plugin-html'
import removeConsole from "vite-plugin-remove-console";


import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(
  configEnv => {

    const viteEnv = loadEnv(configEnv.mode, process.cwd())
    const srcPath = path.resolve(__dirname, 'src')
    const outDir = path.resolve(__dirname, 'dist')
    return {
      server: {
        open: true
      },
      resolve: {
        alias: {
          '~': path.resolve(__dirname),
          '@': srcPath
        }
      },
      plugins: [
        vue(),
        eslintPlugin({
          include: ['src/**/*.js', 'src/*.js', 'src/**/*.ts', 'src/*.ts', 'src/**/*.vue', 'src/*.vue']
        }),
        createHtmlPlugin({
          minify: true,
          inject: {
            data: {
              appName: viteEnv.VITE_APP_NAME
            }
          }
        }),
        progress({
          format: `${colors.green(colors.bold('Bouilding'))} ${colors.cyan(
            '[:bar]'
          )} :percent`
        }),
        viteCompression(),
        removeConsole()
      ],
      optimizeDeps: {
        include: []
      },
      build: {
        reportCompressedSize: false,
        sourcemap: false,
        commonjsOptions: {
          ignoreTryCatch: false
        },
        cssCodeSplit: false,
        outDir: outDir,
        emptyOutDir: true,
        minify: 'esbuild',
        chunkSizeWarningLimit: 500,
        rollupOptions: {
          output: {
            manualChunks: {
              vue: ['vue', 'vue-router']
            }
          }
        }
      }
    }
  })
