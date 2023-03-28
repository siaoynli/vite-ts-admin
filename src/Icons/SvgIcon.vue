<script setup lang="ts">
import { computed, CSSProperties, useAttrs } from 'vue'
import { isNumber } from '@/utils/is'

const attrs = useAttrs()

interface Props {
  type?: string
  size?: number | string
  rotate?: number
  spin?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: '22'
})

const prefixCls = 'svg-icon'

const innerStyle = computed(() => {
  const styles: CSSProperties = (attrs.style as CSSProperties) || {}
  if (props.size) {
    styles.fontSize = isNumber(props.size) ? `${props.size}px` : props.size
  }
  if (props.rotate) {
    styles.transform = `rotate(${props.rotate}deg)`
  }
  return styles
})

const cls = computed(() => [
  prefixCls,
  {
    [`${prefixCls}-loading`]: props.spin
  },
  props.type
])
</script>

<template>
  <svg
    aria-hidden="true"
    width="1em"
    height="1em"
    :class="cls"
    :style="innerStyle"
    fill="currentColor"
  >
    <slot />
  </svg>
</template>

<style scoped lang="scss"></style>
