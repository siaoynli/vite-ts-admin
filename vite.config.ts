import { defineConfig, loadEnv, splitVendorChunkPlugin, type PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import viteCompression from 'vite-plugin-compression';
import progress from 'vite-plugin-progress'
import colors from 'picocolors'
import { createHtmlPlugin } from 'vite-plugin-html'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import removeConsole from "vite-plugin-remove-console";



import {
  createStyleImportPlugin
} from 'vite-plugin-style-import'

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
        eslintPlugin({
          include: ['src/**/*.js', 'src/*.js', 'src/**/*.ts', 'src/*.ts', 'src/**/*.vue', 'src/*.vue']
        }),
        createSvgIconsPlugin({
          iconDirs: [path.resolve(process.cwd(), 'src/icons')],
          symbolId: 'icon-[dir]-[name]',
          customDomId: '__svg__icons__dom__',
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
        createStyleImportPlugin({
          resolves: [],
          libs: [
            {
              libraryName: 'ant-design-vue',
              esModule: true,
              resolveStyle: (name) => {
                return `ant-design-vue/es/${name}/style/index`
              },
            },
          ],
        }),
        viteCompression(),
        removeConsole(),
        splitVendorChunkPlugin(),
        // visualizer({
        //   gzipSize: true,
        //   brotliSize: true,
        //   emitFile: false,
        //   filename: 'stats/rollup-stats.html', /分析图生成的文件名
        //   open: true //如果存在本地服务端口，将在打包后自动展示
        // }),
      ],
      optimizeDeps: {
        include: []
      },
      css: {
        preprocessorOptions: {
          less: {
            charset: false,
            additionalData: '@import "@/styles/index.less";',
          },
          scss: {
            additionalData: '@import "@/styles/index.scss";'
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
