<style>
    .btn {
        margin: 3px;
    }
</style>

<template>
    <button class = 'btn' @click.prevent ="$emit('onChange', i)"> {{text}} </button>
</template>
<script setup lang="ts" >
    defineProps<{
        i: number,
        text: string
    }>()
    defineEmits<{
        (e: 'onChange', val:number): void
    }>()
</script>