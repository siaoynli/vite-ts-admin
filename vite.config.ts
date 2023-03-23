import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import viteCompression from 'vite-plugin-compression';
import progress from 'vite-plugin-progress'
import colors from 'picocolors'
import { createHtmlPlugin } from 'vite-plugin-html'
import removeConsole from "vite-plugin-remove-console";
import svgLoader from 'vite-svg-loader'

import path from 'path'


export default defineConfig(
  ({ mode }) => {

    const viteEnv = loadEnv(mode, process.cwd())
    const srcPath = path.resolve(__dirname, 'src')

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
        svgLoader(),
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
      css: {
        preprocessorOptions: {
          less: {
            charset: false,
            additionalData: '@import "@/style.less";',
          },
          scss: {
            additionalData: '@import "@/style.scss";'
          }
        },
      },
      build: {
        reportCompressedSize: false,
        sourcemap: false,
        commonjsOptions: {
          ignoreTryCatch: false
        },
        cssCodeSplit: false,
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
      },
      define: {
        __INTLIFY_PROD_DEVTOOLS__: false,
        __APP_INFO__: viteEnv.APP_ENV
      }
    }
  })
