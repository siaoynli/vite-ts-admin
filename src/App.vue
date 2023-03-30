<template>
  <n-config-provider
    :theme="theme.naiveTheme"
    :theme-overrides="theme.naiveThemeOverrides"
    :locale="zhCN"
    :date-locale="dateZhCN">
    <naive-provider>
      <Buttons />
      <SettingDrawer />
    </naive-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider, zhCN, dateZhCN } from 'naive-ui'
import naiveProvider from '@/components/common/naive-provider.vue'

import { useThemeStore, subscribeThemeStore } from '@/store'

import Buttons from '@/views/buttons.vue'

import SettingDrawer from '@/layouts/common/setting-drawer/index.vue'

const theme = useThemeStore()

subscribeThemeStore()
</script>

<style scoped lang="scss"></style>
