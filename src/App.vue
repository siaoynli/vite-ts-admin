<template>
  <n-config-provider :theme="lightTheme" :locale="zhCN" :date-locale="dateZhCN">
    <naive-provider>
      <Buttons />
      <SettingDrawer />
    </naive-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider, zhCN, dateZhCN, lightTheme } from 'naive-ui'

import naiveProvider from '@/components/common/naive-provider.vue'

import Buttons from '@/views/buttons.vue'

import SettingDrawer from '@/layouts/common/setting-drawer/index.vue'
</script>

<style scoped lang="scss">
//
</style>
