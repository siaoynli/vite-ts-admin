<template>
  <div>
    <div class="nav">anv</div>
    <n-space>
      <n-button @click="handleOpenDialog" class="m-2 w-[500px]"
        >dialog</n-button
      >
      <n-button type="tertiary" @click="notify('info')">
        notification
      </n-button>
      <n-button type="primary" @click="handleLoading"> loading </n-button>
      <n-button type="info"> Info </n-button>
      <n-button type="success"> Success </n-button>
      <n-button type="warning">
        <n-icon><Settings /></n-icon>
      </n-button>
      <n-button type="error"> Error </n-button>
    </n-space>
  </div>
</template>

<script setup lang="ts">
import {
  NSpace,
  NButton,
  useMessage,
  useDialog,
  useNotification,
  NotificationType,
  useLoadingBar,
  NIcon
} from 'naive-ui'

import { Settings } from '@vicons/ionicons5'

const message = useMessage()
const dialog = useDialog()
const loadingBar = useLoadingBar()
const notification = useNotification()

const handleOpenDialog = () => {
  dialog.warning({
    title: '警告',
    content: '你确定？',
    positiveText: '确定',
    negativeText: '不确定',
    onPositiveClick: () => {
      message.success('确定')
    },
    onNegativeClick: () => {
      message.error('不确定')
    }
  })
}

const notify = (type: NotificationType) => {
  notification[type]({
    content: '说点啥呢',
    meta: '想不出来',
    duration: 2500,
    keepAliveOnHover: true
  })
}

const handleLoading = () => {
  loadingBar.start()
}
</script>

<style scoped lang="scss">
//
</style>
