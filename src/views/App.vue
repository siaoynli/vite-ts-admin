<script setup lang="ts">
import { NIcon } from 'naive-ui'
console.log(`output->hello`)
</script>

<template>
  <div class="flex justify-center p-5">
    <n-icon size="40" color="#0e7a0d" :depth="3">
      <AncientGateFill />
    </n-icon>
  </div>
  <h1>text</h1>
</template>

<style scoped lang="less">
@primary-color: rgb(200, 16, 200);

h1 {
  color: @primary-color;
  @apply text-2xl  p-5 cursor-pointer;

  &:hover {
    @apply bg-indigo-500;
  }
}
</style>
