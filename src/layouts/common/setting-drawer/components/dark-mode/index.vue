<template>
  <n-divider title-placement="center">主题模式</n-divider>
  <n-space
    vertical
    size="large">
    <setting-menu label="深色主题">
      <n-switch
        :value="theme.darkMode"
        @update:value="theme.setDarkMode">
        <template #checked>
          <n-icon :component="Sunny" />
        </template>
        <template #unchecked>
          <n-icon :component="Moon" />
        </template>
      </n-switch>
    </setting-menu>
    <setting-menu label="跟随系统">
      <n-switch
        :value="theme.followSystemTheme"
        @update:value="theme.setFollowSystemTheme">
        <template #checked>
          <n-icon :component="Ban" />
        </template>
        <template #unchecked>
          <n-icon :component="Browsers" />
        </template>
      </n-switch>
    </setting-menu>
  </n-space>
</template>

<script setup lang="ts">
import { NDivider, NSpace, NSwitch, NIcon } from 'naive-ui'
import SettingMenu from '../setting-menu/index.vue'
import { Moon, Sunny, Ban, Browsers } from '@vicons/ionicons5'

import { useThemeStore } from '@/store'

const theme = useThemeStore()
</script>

<style scoped lang="scss"></style>
