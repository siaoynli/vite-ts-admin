<template>
  <div
    :style="{ paddingLeft: theme.sider.width + 'px' }"
    class="pb-2">
    <n-layout-header
      class="global-header flex-y-center h-full"
      :style="{ height: theme.header.height + 'px' }"
      :inverted="theme.header.inverted">
      头部
    </n-layout-header>
  </div>
</template>

<script setup lang="ts">
import { NLayoutHeader } from 'naive-ui'

import { useThemeStore } from '@/store'

const theme = useThemeStore()
</script>

<style scoped lang="scss">
.global-header {
  box-shadow: 0 1px 2px rgb(0 21 41 / 8%);
}
</style>
