<template>
  <div
    class="color-checkbox justify-center items-center"
    :style="{ backgroundColor: color }">
    <n-icon v-if="checked">
      <CheckmarkOutline :class="[iconClass, isWhite ? 'text-gray-700' : 'text-white']" />
    </n-icon>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { NIcon } from 'naive-ui'

import { CheckmarkOutline } from '@vicons/ionicons5'

interface Props {
  color: string
  checked: boolean
  iconClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  iconClass: 'text-[14px]'
})

const whiteColors = ['#ffffff', '#fff', 'rgb(255,255,255)']

const isWhite = computed(() => whiteColors.includes(props.color))
</script>

<style scoped lang="scss">
.color-checkbox {
  @apply flex w-[20px] h-[20px] rounded-[2px]  cursor-pointer shadow-lg shadow-gray-500/20;
}
</style>
