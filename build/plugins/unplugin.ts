import { PluginOption } from 'vite'

import Components from 'unplugin-vue-components/vite'
import {
  AntDesignVueResolver,
} from 'unplugin-vue-components/resolvers'



export default (): PluginOption | PluginOption[] => {
  return Components({
    resolvers: [
      AntDesignVueResolver({
        importStyle: 'less',
      }),
    ],
    dts: 'src/types/components.d.ts'  // 生成ts声明文件
  })
}