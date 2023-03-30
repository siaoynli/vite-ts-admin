<template>
  <n-drawer
    :show="app.settingDrawerVisible"
    :width="300"
    display-directive="show"
    :placement="placement"
    @mask-click="app.closeSettingDrawer">
    <n-drawer-content
      title="主题配置"
      :native-scrollbar="false">
      <dark-mode />
      <theme-color-select />
    </n-drawer-content>
  </n-drawer>
  <drawer-button v-if="showButton" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NDrawer, NDrawerContent, type DrawerPlacement } from 'naive-ui'
import { DrawerButton, DarkMode, ThemeColorSelect } from './components'

import { useAppStore } from '@/store'
const app = useAppStore()

const placement = ref<DrawerPlacement>('right')

const showButton = import.meta.env.DEV
</script>

<style scoped lang="scss"></style>
