<template>
  <CodeIndex data="123" />
</template>

<script setup lang="ts">
import { getList } from '@web/api/code'
import CodeIndex from '@web/components/Code/Index.vue'

getList(1)
</script>

<style scoped lang="scss">
.main {
  width: 100px;
  height: 100px;
  padding: 10px;
  color: red;
  cursor: pointer;
}
</style>
