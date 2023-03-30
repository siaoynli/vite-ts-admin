<template>
  <n-button
    type="primary"
    class="fixed right-2 bottom-[50%] z-[10000] transition-all duration-300"
    :class="[{ '!right-[300px]': app.settingDrawerVisible }, 'ease-out']"
    @click="app.toggleSettingDrawerVisible">
    <n-icon v-if="app.settingDrawerVisible">
      <Close />
    </n-icon>
    <n-icon v-else>
      <Settings />
    </n-icon>
  </n-button>
</template>

<script setup lang="ts">
import { NButton, NIcon } from 'naive-ui'
import { Settings, Close } from '@vicons/ionicons5'

import { useAppStore } from '@/store'
const app = useAppStore()
</script>

<style scoped lang="scss"></style>
