<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#333'
  },
  size: {
    type: String,
    default: ''
  }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <svg
    aria-hidden="true"
    class="svg-icon"
    :style="{ fontSize: `${size}px`, color: `${color}` }"
  >
    <use :xlink:href="symbolId" :size="size" />
  </svg>
</template>

<style scoped lang="scss">
.svg-icon {
  width: 1em; /* 允许通过fontsize设置svg大小 */
  height: 1em; /* 允许通过fontsize设置svg大小 */
  vertical-align: -0.2em;
  fill: currentColor; /* 允许设置icon颜色 */
  overflow: hidden;
  font-size: 24px;
}
</style>
