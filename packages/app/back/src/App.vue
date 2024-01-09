<template>
    <div>
        <Form />
        {{ data }}
    </div>
</template>

<script setup lang="ts">
import Form from '@web/components/Form.vue'
import { ref } from 'vue'

const data = ref(0)
</script>

<style scoped></style>
