<script setup lang="ts">
import VueSvg from '@/assets/vue.svg?component'
console.log(`output->hello`)
</script>

<template>
  <div class="flex justify-center p-5">
    <VueSvg />
  </div>
</template>

<style scoped lang="postcss">
h1 {
  @apply text-2xl   text-indigo-800  p-5;
}
</style>
