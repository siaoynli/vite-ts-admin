import { defineStore } from 'pinia'
import { LoadingBarProviderInst, DialogProviderInst, MessageProviderInst, NotificationProviderInst } from 'naive-ui'

interface privateState {
  loadingBar: LoadingBarProviderInst,
  dialog: DialogProviderInst,
  message: MessageProviderInst,
  notification: NotificationProviderInst,
}

const initProvider = (): privateState => {
  return {
    loadingBar: {} as LoadingBarProviderInst,
    dialog: {} as DialogProviderInst,
    message: {} as MessageProviderInst,
    notification: {} as NotificationProviderInst,
  }
}

export const useProviderStore = defineStore('provider', {
  state: (): privateState => initProvider(),
  actions: {
    setLoadingBar(b: LoadingBarProviderInst) {
      this.loadingBar = b
    },
    setDialog(b: DialogProviderInst) {
      this.dialog = b
    },
    setMessage(b: MessageProviderInst) {
      this.message = b
    },
    setNotification(b: NotificationProviderInst) {
      this.notification = b
    },
  }
})