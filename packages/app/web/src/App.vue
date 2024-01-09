<template>
    <Index />
</template>

<script setup lang="ts">
import { getList } from '@web/api/code'
import Index from '@web/components/Code/Index.vue'

getList(1)
</script>

<style scoped></style>
