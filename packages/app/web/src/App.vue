<template>
  <CodeIndex :data="{}" />
</template>

<script setup lang="ts">
import { getList } from '@web/api/code'
import CodeIndex from '@web/components/Code/Index.vue'

getList(1)
</script>

<style scoped lang="less">
.main {
  color: red;
  width: 100px;
  height: 100px;
  padding: 10px;
}
</style>
