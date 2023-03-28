<script setup lang="ts">
import { computed, useAttrs } from 'vue'
const attrs = useAttrs()
const bindAttrs = computed<{ class: string; style: string }>(() => ({
  class: (attrs.class as string) || '',
  style: (attrs.style as string) || ''
}))

interface Props {
  icon?: string
  localIcon?: string
  size?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: '22'
})

const symbolId = computed(() => {
  const { VITE_ICON_LOCAL_PREFIX: prefix } = import.meta.env
  const localIconPrefix = prefix || 'icon'
  return `#${localIconPrefix}-${props.localIcon}`
})
</script>

<template>
  <template v-if="localIcon">
    <svg
      aria-hidden="true"
      width="1em"
      height="1em"
      v-bind="bindAttrs"
      :style="{ fontSize: `${size}` }"
    >
      <use :xlink:href="symbolId" fill="currentColor" />
    </svg>
  </template>
  <template v-else>
    <!-- todo 组件图标引入 -->
  </template>
</template>

<style scoped lang="scss"></style>
