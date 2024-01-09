<template>
    <HW msg="111" />
</template>

<script setup lang="ts">
import { getList } from '@web/api/code'
import HW from '@components/HelloWorld.vue'

getList(1)
</script>

<style scoped></style>
