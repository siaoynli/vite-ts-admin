<template>
  <div>
    <drawer-button v-if="showButton" />
  </div>
</template>

<script setup lang="ts">
import DrawerButton from './components/drawer-button.vue'

const showButton = import.meta.env.DEV
</script>

<style scoped lang="scss"></style>
