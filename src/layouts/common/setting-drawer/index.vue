<template>
  <div
    class="fixed right-2 bottom-[50%]"
    v-if="showButton">
    <drawer-button />
  </div>
</template>

<script setup lang="ts">
import DrawerButton from './components/drawer-button.vue'

const showButton = import.meta.env.DEV
</script>

<style scoped lang="scss"></style>
