import { visualizer } from 'rollup-plugin-visualizer'
import { type PluginOption } from 'vite'

export default (): PluginOption => {
  return visualizer({
    gzipSize: true,
    brotliSize: true,
    open: true
  }) as unknown as PluginOption;
}