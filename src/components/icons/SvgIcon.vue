<script lang="ts">
export default {
  name: 'SvgIcon',
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { computed, CSSProperties, useAttrs } from 'vue'
import { isNumber } from '@/utils/is'
//可以直接 v-model 绑定
const bindAttr = useAttrs()

interface Props {
  type?: string
  size?: string
  rotate?: number
}

const props = withDefaults(defineProps<Props>(), {
  size: '22'
})

const symbolId = computed(() => {
  const { VITE_ICON_LOCAL_PREFIX: prefix } = import.meta.env
  const localIconPrefix = prefix || 'icon'
  return `#${localIconPrefix}-${props.type}`
})

const prefixClass = 'svg-icon'

const innerStyle = computed(() => {
  const styles: CSSProperties = (bindAttr.style as CSSProperties) || {}
  if (props.size) {
    styles.fontSize = isNumber(props.size) ? `${props.size}px` : props.size
  }
  if (props.rotate) {
    styles.transform = `rotate(${props.rotate}deg)`
  }
  return styles
})
const className = computed(() => [
  prefixClass,
  props.type?.toLocaleLowerCase(),
  bindAttr.class as string
])
</script>

<template>
  <svg
    aria-hidden="true"
    width="1em"
    height="1em"
    :class="className"
    :style="innerStyle"
    fill="currentColor"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>

<style scoped lang="scss"></style>
