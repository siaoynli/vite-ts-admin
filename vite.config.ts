import { defineConfig, loadEnv } from 'vite'

import { createViteProxy, getProxyEnvConfig, viteDefine, setupVitePlugins, getRootPath, getSrcPath } from './build';


export default defineConfig(
  ({ mode }) => {
    const viteEnv = loadEnv(mode, process.cwd()) as unknown as ImportMetaEnv;
    const isOpenProxy = viteEnv.VITE_HTTP_PROXY === true;
    return {
      server: {
        open: true,
        proxy: createViteProxy(isOpenProxy, getProxyEnvConfig(viteEnv))
      },
      resolve: {
        alias: {
          '~': getRootPath(),
          '@': getSrcPath()
        }
      },
      define: {
        __INTLIFY_PROD_DEVTOOLS__: false,
        __APP_INFO__: viteEnv.APP_ENV,
        ...viteDefine
      },
      plugins: setupVitePlugins(viteEnv),
      optimizeDeps: {
        include: [
          // 'echarts',
        ]
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
      }

    }
  })
