import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import { getDirPath } from '../utils'

export default () => {
  return createSvgIconsPlugin({
    iconDirs: [getDirPath('src/assets/icons')],
    symbolId: 'icon-[dir]-[name]'
  })
}