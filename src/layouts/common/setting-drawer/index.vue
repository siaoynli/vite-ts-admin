<template>
  <n-drawer
    v-model:show="active"
    :width="300"
    display-directive="show"
    :z-index="1000"
    :placement="placement">
    <n-drawer-content
      title="主题配置"
      closable
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

const active = ref(true)
const placement = ref<DrawerPlacement>('right')

const showButton = import.meta.env.DEV
</script>

<style scoped lang="scss"></style>
