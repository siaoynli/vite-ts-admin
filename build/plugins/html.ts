import { createHtmlPlugin } from 'vite-plugin-html'
import { type PluginOption } from 'vite'

export default (viteEnv: ImportMetaEnv): PluginOption | PluginOption[] => {
  return createHtmlPlugin({
    minify: true,
    inject: {
      data: {
        appName: viteEnv.VITE_APP_NAME
      }
    }
  })
}