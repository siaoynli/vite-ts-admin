import type { App } from 'vue';
import { createPinia } from 'pinia';



export function setupStore(app: App) {
  const store = createPinia();
  app.use(store);
}


//导出方便直接引入
export * from './modules';
export * from './subscribe';