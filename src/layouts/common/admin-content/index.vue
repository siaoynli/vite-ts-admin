<template>
  <div
    :style="{ paddingLeft: theme.sider.width + 'px' }"
    class="pb-2">
    <n-layout-content content-style="padding: 24px;"> 平山道 </n-layout-content>
  </div>
</template>

<script setup lang="ts">
import { NLayoutContent } from 'naive-ui'

import { useThemeStore } from '@/store'

const theme = useThemeStore()
</script>

<style scoped lang="scss"></style>
