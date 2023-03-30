<template>
  <n-modal
    :show="visible"
    preset="card"
    class="w-[640px] h-[480px]"
    :z-index="10001"
    @close="$emit('close')">
    <div class="flex justify-center pb-2">
      <n-gradient-text
        type="primary"
        :size="24">
        中国传统颜色
      </n-gradient-text>
    </div>
    <n-tabs justify-content="space-between">
      <n-tab-pane
        v-for="item in traditionColors"
        :key="item.label"
        :name="item.label"
        :tab="item.label">
        <n-grid
          :cols="8"
          :x-gap="16"
          :y-gap="8">
          <n-grid-item
            v-for="i in item.data"
            :key="i.label">
            <color-checkbox
              class="!w-full !h-[36px] !rounded-[4px]"
              :color="i.color"
              :checked="i.color == theme.themeColor"
              icon-class="text-[24px]"
              @click="theme.setThemeColor(i.color)"></color-checkbox>
          </n-grid-item>
        </n-grid>
      </n-tab-pane>
    </n-tabs>
  </n-modal>
</template>

<script setup lang="ts">
import { NModal, NGradientText, NTabs, NTabPane, NGrid, NGridItem } from 'naive-ui'
import { useThemeStore } from '@/store'
import { traditionColors } from '@/settings'

import ColorCheckbox from './color-checkbox.vue'
const theme = useThemeStore()

interface Props {
  visible: boolean
}

defineProps<Props>()

interface Emits {
  (e: 'close'): void
}

defineEmits<Emits>()
</script>

<style scoped lang="scss"></style>
