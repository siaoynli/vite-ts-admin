<template>
  <n-button type="primary">
    <n-icon v-if="isVisible">
      <Settings />
    </n-icon>
    <n-icon v-else>
      <Close />
    </n-icon>
  </n-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NButton, NIcon } from 'naive-ui'
import { Settings, Close } from '@vicons/ionicons5'
const isVisible = ref(true)
</script>

<style scoped lang="scss"></style>
