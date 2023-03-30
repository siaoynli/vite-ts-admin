import { defineStore } from 'pinia'
import { ref } from 'vue'
import { LoadingBarApi, DialogApi, MessageApi, NotificationApi } from 'naive-ui'

export const useProviderStore = defineStore('provider', () => {
  const loadingBar = ref<LoadingBarApi>()

  const dialog = ref<DialogApi>()

  const message = ref<MessageApi>()

  const notification = ref<NotificationApi>()

  function setLoadingBar(b: LoadingBarApi) {
    loadingBar.value = b
  }

  function setDialog(b: DialogApi) {
    dialog.value = b
  }

  function setMessage(b: MessageApi) {
    message.value = b
  }

  function setNotification(b: NotificationApi) {
    notification.value = b
  }

  return {
    loadingBar,
    setLoadingBar,
    dialog,
    setDialog,
    message,
    setMessage,
    notification,
    setNotification
  }
})