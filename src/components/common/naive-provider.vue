<template>
  <n-loading-bar-provider>
    <n-dialog-provider>
      <n-notification-provider>
        <n-message-provider>
          <slot></slot>
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-loading-bar-provider>
</template>

<script setup lang="ts">
import {
  NLoadingBarProvider,
  NDialogProvider,
  NMessageProvider,
  NNotificationProvider
} from 'naive-ui'
</script>

<style scoped lang="scss"></style>
