<script setup lang="ts">
import { allSvgFiles } from '@/utils/svg'
const svgs = allSvgFiles().map((item) => {
  const _item = item.split('/')
  _item.splice(0, 1)
  return _item.join('-')
})
</script>

<template>
  <svg-icon v-for="(svg, index) in svgs" :key="index" :type="svg" />
</template>

<style scoped lang="scss"></style>
