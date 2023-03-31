import { defineStore } from 'pinia';
import { darkTheme } from 'naive-ui';
import { initThemeSettings, getNaiveThemeOverrides } from "./helper"

type themeState = Theme.Setting

export const useThemeStore = defineStore('theme-store', {
  state: (): themeState => initThemeSettings(),
  getters: {

    /** naiveUI的主题覆写 */
    naiveThemeOverrides(state) {
      const overrides = getNaiveThemeOverrides({ primary: state.themeColor, ...state.customColor });
      return overrides;
    },
    /** naive-ui暗黑主题 */
    naiveTheme(state) {
      return state.darkMode ? darkTheme : undefined;
    },
  },
  actions: {
    /** 重置theme状态 */
    resetThemeStore() {
      this.$reset();
    },
    /** 缓存主题配置 */
    cacheThemeSettings() {
      // const isProd = import.meta.env.PROD;

    },
    /** 设置暗黑模式 */
    setDarkMode(darkMode: boolean) {
      this.darkMode = darkMode;
    },
    /** 设置自动跟随系统主题 */
    setFollowSystemTheme(visible: boolean) {
      this.followSystemTheme = visible;
    },
    /** 自动跟随系统主题 */
    setAutoFollowSystemMode(darkMode: boolean) {
      if (this.followSystemTheme) {
        this.darkMode = darkMode;
      }
    },

    /** 设置系统主题颜色 */
    setThemeColor(themeColor: string) {
      this.themeColor = themeColor;
    },

    /** 侧边栏宽度 */
    setSiderWidth(width: number | null) {
      if (width) {
        this.sider.width = width;
      }
    },
  }


})




