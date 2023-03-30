<template>
  <div>
    <n-space>
      <n-button @click="handleOpenDialog"> dialog </n-button>
      <n-button type="tertiary"> notification </n-button>
      <n-button type="primary"> primary </n-button>
      <n-button
        type="info"
        @click="notify('info')">
        Info
      </n-button>
      <n-button
        type="success"
        @click="notify('success')">
        Success
      </n-button>
      <n-button
        type="warning"
        @click="notify('warning')">
        <n-icon><Settings /></n-icon>
      </n-button>
      <n-button
        type="error"
        @click="logout">
        logout
      </n-button>
    </n-space>
  </div>
  <setting-drawer />
</template>

<script setup lang="ts">
import { NSpace, NButton, NotificationType, NIcon } from 'naive-ui'

import { Settings } from '@vicons/ionicons5'

import SettingDrawer from '@/layouts/common/setting-drawer/index.vue'

import { useProviderStore } from '@/store'

const provider = useProviderStore()

const handleOpenDialog = () => {
  provider.dialog?.warning({
    title: '警告',
    content: '你确定？',
    positiveText: '确定',
    negativeText: '不确定',
    onPositiveClick: () => {
      provider.message?.success('确定')
    },
    onNegativeClick: () => {
      provider.message?.error('不确定')
    }
  })
}

const notify = (type: NotificationType) => {
  if (provider.notification) {
    provider.notification[type]({
      content: '说点啥呢',
      meta: '想不出来',
      duration: 2500,
      keepAliveOnHover: true
    })
  }
}

const logout = () => {
  window.$dialog?.info({
    title: '提示',
    content: '您确定要退出登录吗？',
    positiveText: '确定',
    negativeText: '取消'
  })
}
</script>

<style scoped lang="scss"></style>
