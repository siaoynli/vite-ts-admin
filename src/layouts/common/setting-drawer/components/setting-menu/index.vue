<template>
  <div class="flex justify-between items-center">
    <span>{{ label }}</span>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string
}

defineProps<Props>()
</script>

<style scoped lang="scss"></style>
