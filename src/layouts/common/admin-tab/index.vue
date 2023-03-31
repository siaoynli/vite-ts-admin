<template>
  <div :style="{ paddingLeft: theme.sider.width + 'px' }">
    <n-tabs
      type="card"
      closable>
      <n-tab-pane
        name="oasis"
        tab="Oasis">
      </n-tab-pane>
      <n-tab-pane
        name="the beatles"
        tab="the Beatles">
      </n-tab-pane>
      <n-tab-pane
        name="jay chou"
        tab="周杰伦">
      </n-tab-pane>
      <template #prefix> Prefix </template>
    </n-tabs>
  </div>
</template>

<script setup lang="ts">
import { NTabs, NTabPane } from 'naive-ui'
import { useThemeStore } from '@/store'

const theme = useThemeStore()
</script>

<style scoped lang="scss"></style>
