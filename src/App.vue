<script setup lang="ts">
console.log(`output->hello`)
</script>

<template>
  <div class="flex justify-center p-5">
    <svg-icon name="remix-home-line" />
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

.svg-icon {
  color: blueviolet;
}
</style>
