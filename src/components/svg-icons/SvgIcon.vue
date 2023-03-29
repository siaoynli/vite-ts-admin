<script lang="ts">
export default {
  name: 'SvgIcon',
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { computed, CSSProperties } from 'vue'
import { isNumber } from '@/utils/is'

interface Props {
  type?: string
  size?: number | string
  color?: string
}

const props = defineProps<Props>()

const prefixClass = 'svg-icon'

const innerStyle = computed(() => {
  const styles: CSSProperties = {}
  if (props.size) {
    if (isNumber(props.size)) {
      styles.fontSize = `${props.size}px`
    } else {
      styles.fontSize = `${parseInt(props.size)}px`
    }
  }
  if (props.color) {
    styles.color = props.color
  }
  return styles
})

const className = computed(() => [prefixClass, props.type?.toLocaleLowerCase()])
</script>

<template>
  <i :class="className" :style="innerStyle" v-bind="$attrs">
    <slot />
  </i>
</template>

<style scoped lang="scss">
.svg-icon {
  height: 1em;
  width: 1em;
  line-height: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;
  font-size: inherit;
}
</style>
