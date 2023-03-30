<template>
  <n-loading-bar-provider :loading-bar-style="{ loading: { maxWidth: '100%' } }">
    <n-dialog-provider>
      <n-notification-provider>
        <n-message-provider>
          <slot></slot>
          <naive-provider-content />
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-loading-bar-provider>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import {
  NLoadingBarProvider,
  NDialogProvider,
  NMessageProvider,
  NNotificationProvider,
  useLoadingBar,
  useDialog,
  useMessage,
  useNotification
} from 'naive-ui'
import { RouterView } from 'vue-router'

import { useProviderStore } from '@/store'

const provider = useProviderStore()

function registerNaiveTools() {
  //挂载naive组件的方法至window, 以便在路由钩子函数和请求函数里面调用
  window.$loadingBar = useLoadingBar()
  window.$dialog = useDialog()
  window.$message = useMessage()
  window.$notification = useNotification()
}

const NaiveProviderContent = defineComponent({
  name: 'NaiveProviderContent',
  setup() {
    provider.setLoadingBar(useLoadingBar())
    provider.setDialog(useDialog())
    provider.setMessage(useMessage())
    provider.setNotification(useNotification())
    registerNaiveTools()
  },
  render() {
    return h(RouterView)
  }
})
</script>

<style scoped lang="scss"></style>
