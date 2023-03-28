import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'


import { createViteProxy, getProxyEnvConfig, viteDefine } from './build';

import eslintPlugin from 'vite-plugin-eslint'
import viteCompression from 'vite-plugin-compression';
import progress from 'vite-plugin-progress'
import colors from 'picocolors'
import { createHtmlPlugin } from 'vite-plugin-html'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import removeConsole from "vite-plugin-remove-console";



import Components from 'unplugin-vue-components/vite'
import {
  AntDesignVueResolver,
} from 'unplugin-vue-components/resolvers'




import path from 'path'


export default defineConfig(
  ({ mode }) => {

    const viteEnv = loadEnv(mode, process.cwd()) as unknown as ImportMetaEnv;

    const isOpenProxy = viteEnv.VITE_HTTP_PROXY === true;
    const srcPath = path.resolve(__dirname, 'src')
    return {
      server: {
        open: true,
        proxy: createViteProxy(isOpenProxy, getProxyEnvConfig(viteEnv))
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
        Components({
          resolvers: [
            AntDesignVueResolver({
              importStyle: 'less',
            }),
          ],
          dts: 'src/types/components.d.ts'  // 生成ts声明文件
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
        removeConsole(),
        splitVendorChunkPlugin(),
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
