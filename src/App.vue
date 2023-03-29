<script setup lang="ts">
import { NConfigProvider, zhCN, dateZhCN, lightTheme } from 'naive-ui'

import naiveProvider from '@/components/common/naive-provider.vue'

import Buttons from '@/views/buttons.vue'
</script>

<template>
  <n-config-provider :theme="lightTheme" :locale="zhCN" :date-locale="dateZhCN">
    <naive-provider>
      <Buttons />
    </naive-provider>
  </n-config-provider>
</template>

<style scoped lang="scss"></style>
