<script setup lang="ts">
import { computed } from 'vue'
import Icon from './SvgIcon.vue'

interface Props {
  type: string
  size?: number | string
  rotate?: number
  spin?: boolean
}
const props = defineProps<Props>()

const symbolId = computed(() => {
  const { VITE_ICON_LOCAL_PREFIX: prefix } = import.meta.env
  const iconPrefix = prefix || 'icon'
  return `#${iconPrefix}-${props.type}`
})
</script>

<template>
  <Icon>
    <use :xlink:href="symbolId" />
  </Icon>
</template>

<style scoped lang="scss"></style>
