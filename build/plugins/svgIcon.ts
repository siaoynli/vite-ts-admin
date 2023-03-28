import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import { getDirPath } from '../utils'

export default () => {
  return createSvgIconsPlugin({
    iconDirs: [getDirPath('src/icons')],
    symbolId: 'icon-[dir]-[name]',
    customDomId: '__svg__icons__dom__',
  })
}