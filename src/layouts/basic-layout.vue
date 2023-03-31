<template>
  <n-layout
    has-sider
    class="h-full">
    <admin-sider></admin-sider>
    <n-layout>
      <admin-header></admin-header>
      <admin-tab></admin-tab>
      <admin-content></admin-content>

      <admin-footer></admin-footer>
    </n-layout>
  </n-layout>

  <n-back-top
    :key="theme.scrollMode"
    class="z-100" />
  <setting-drawer />
</template>

<script setup lang="ts">
import { NLayout, NBackTop } from 'naive-ui'

import SettingDrawer from './common/setting-drawer/index.vue'
import AdminHeader from './common/admin-header/index.vue'
import AdminSider from './common/admin-sider/index.vue'
import AdminTab from './common/admin-tab/index.vue'
import AdminContent from './common/admin-content/index.vue'
import AdminFooter from './common/admin-footer/index.vue'

import { useThemeStore } from '@/store'

const theme = useThemeStore()
</script>

<style scoped lang="scss">
// #app {
//   @include scrollbar(8px, #e1e1e1);
// }

// .dark #app {
//   @include scrollbar(8px, #555);
// }
</style>
