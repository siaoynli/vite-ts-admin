import { effectScope, onScopeDispose, watch } from 'vue'
import { useOsTheme } from 'naive-ui'

import { useThemeStore } from '../modules'

export function subscribeThemeStore() {

  const theme = useThemeStore()
  const osTheme = useOsTheme()
  const scope = effectScope()

  scope.run(() => {
    // 监听主题颜色
    watch(
      () => theme.themeColor,
      newValue => {
        console.log(`output->主题颜色`, newValue)
      },
      { immediate: true }
    )
    // 监听naiveUI样式重写 themeOverrides
    watch(
      () => theme.naiveThemeOverrides,
      newValue => {
        if (newValue.common) {
          console.log(`output->newValue.common`, newValue.common)
        }
      },
      { immediate: true }
    )
    // 监听暗黑模式
    watch(
      () => theme.darkMode,
      newValue => {
        if (newValue) {
          console.log(`output->切换到暗黑模式`)
        } else {
          console.log(`output->切换到初始模式`)
        }
      },
      {
        immediate: true
      }
    )
    // 监听操作系统主题模式
    watch(
      osTheme,
      newValue => {
        console.log(`output->切换到跟随系统`, newValue)
        const isDark = newValue === 'dark'
        theme.setAutoFollowSystemMode(isDark)
      },
      { immediate: true }
    )
  })

  onScopeDispose(() => {
    scope.stop()
  })

}