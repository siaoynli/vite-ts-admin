import type { App } from 'vue';
import type { RouteRecordRaw } from "vue-router"
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import { useProviderStore } from '@/store'

const { VITE_HASH_ROUTE = false } = import.meta.env;


export const constantRoutes: RouteRecordRaw[] = [
  {
    name: 'root',
    path: '/',
    component: () => import('@/views/index/index.vue'),
    meta: {
      title: '首页',
    }
  },
  // 匹配无效路径的路由
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/index/404.vue'),
    meta: {
      title: '未找到',
    }
  }
];


export const router = createRouter({
  history: VITE_HASH_ROUTE === true ? createWebHashHistory() : createWebHistory(),
  routes: constantRoutes,

});


router.beforeEach(() => {
  useProviderStore().loadingBar?.start()
})

router.afterEach(() => {
  useProviderStore().loadingBar?.finish()
})



export async function setupRouter(app: App) {
  app.use(router);
  await router.isReady();
}
