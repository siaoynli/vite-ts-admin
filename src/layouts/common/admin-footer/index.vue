<template>
  <div
    :style="{ left: theme.sider.width + 'px' }"
    style="position: fixed; bottom: 0; right: 0">
    <n-layout-footer
      bordered
      class="text-center py-4">
      版权所有
    </n-layout-footer>
  </div>
</template>

<script setup lang="ts">
import { NLayoutFooter } from 'naive-ui'
import { useThemeStore } from '@/store'

const theme = useThemeStore()
</script>

<style scoped lang="scss"></style>
