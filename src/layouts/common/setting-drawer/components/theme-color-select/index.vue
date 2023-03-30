<template>
  <n-divider title-placement="center">系统主题</n-divider>
  <n-grid
    :cols="8"
    :x-gap="8"
    :y-gap="12">
    <n-grid-item
      v-for="color in themeSetting.themeColorList"
      :key="color"
      class="flex-x-center">
      <color-checkbox
        :color="color"
        :checked="color === themeColor"
        @click="setThemeColor(color)" />
    </n-grid-item>
  </n-grid>
  <n-space
    :vertical="true"
    class="mt-5">
    <n-color-picker
      :modes="['hex']"
      :value="themeColor" />
    <n-button
      :block="true"
      type="default"
      >更多颜色</n-button
    >
  </n-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NDivider, NGrid, NGridItem, NSpace, NColorPicker, NButton } from 'naive-ui'
import ColorCheckbox from './color-checkbox.vue'
import { themeSetting } from '@/settings/theme'

const themeColor = ref(themeSetting.themeColor)

const setThemeColor = (color: string) => {
  themeColor.value = color
}
</script>

<style scoped lang="scss"></style>
