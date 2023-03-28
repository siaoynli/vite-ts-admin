<script setup lang="ts">
import RemixIcons from '@/views/RemixIcons.vue'
console.log(`output->hello`)
</script>

<template>
  <div class="flex justify-center p-5">
    <svg-icon type="remix-Buildings-home-line" />
    <remix-icons />
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
