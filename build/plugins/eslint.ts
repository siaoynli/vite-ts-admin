import eslintPlugin from 'vite-plugin-eslint'
import { type PluginOption } from 'vite'
export default (): PluginOption | PluginOption[] => {
  return eslintPlugin({
    include: [
      'src/**/*.js',
      'src/*.js',
      'src/**/*.ts',
      'src/*.ts',
      'src/**/*.vue',
      'src/*.vue'
    ]
  })
}