<script setup lang="ts">
import { NIcon } from 'naive-ui'
import { AncientGateFill } from 'remix-icons-vue'
import { isNumber, isArray } from '@/utils/is'

console.log(`output->`, isNumber('aaa'))
console.log(`output2->`, isArray(['aaa']))
</script>

<template>
  <div class="flex justify-center p-5">
    <n-icon size="40" color="#0e7a0d" :depth="3">
      <AncientGateFill />
    </n-icon>
  </div>
</template>

<style scoped lang="less"></style>
