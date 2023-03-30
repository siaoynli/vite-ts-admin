// import { nextTick } from 'vue';
import { defineStore } from 'pinia';
interface AppState {
  /** 项目配置的抽屉可见状态 */
  settingDrawerVisible: boolean;

}

export const useAppStore = defineStore('app-store', {
  state: (): AppState => ({
    settingDrawerVisible: false,
  }),

  actions: {
    /** 打开设置抽屉 */
    openSettingDrawer() {
      this.settingDrawerVisible = true;
    },
    /** 关闭设置抽屉 */
    closeSettingDrawer() {
      this.settingDrawerVisible = false;
    },
    /** 切换抽屉可见状态 */
    toggleSettingDrawerVisible() {
      this.settingDrawerVisible = !this.settingDrawerVisible;
    },
  }
})