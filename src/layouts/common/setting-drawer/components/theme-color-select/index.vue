<template>
  <n-divider title-placement="center">系统主题</n-divider>
  <n-grid
    :cols="8"
    :x-gap="8"
    :y-gap="12">
    <n-grid-item
      v-for="color in theme.themeColorList"
      :key="color"
      class="flex-x-center">
      <color-checkbox
        :color="color"
        :checked="color === theme.themeColor"
        @click="theme.setThemeColor(color)" />
    </n-grid-item>
  </n-grid>
  <n-space
    :vertical="true"
    class="mt-5">
    <n-color-picker
      :modes="['hex']"
      :show-alpha="false"
      :value="theme.themeColor"
      @update:value="theme.setThemeColor" />
    <n-button
      :block="true"
      type="default"
      >更多颜色</n-button
    >
  </n-space>
</template>

<script setup lang="ts">
import { NDivider, NGrid, NGridItem, NSpace, NColorPicker, NButton } from 'naive-ui'
import ColorCheckbox from './color-checkbox.vue'
import { useThemeStore } from '@/store'
const theme = useThemeStore()
</script>

<style scoped lang="scss"></style>
