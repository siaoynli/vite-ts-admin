<template>
  <n-button
    type="primary"
    class="fixed right-2 bottom-[50%] z-[1000]"
    @click="handleSettingDrawerVisible">
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

const handleSettingDrawerVisible = () => {
  isVisible.value = !isVisible.value
}
</script>

<style scoped lang="scss"></style>
