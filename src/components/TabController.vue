<style>
    .form-group {
        background-color: #04AA6D; /* Green background */
        color: white; /* White text */
        padding: 10px 24px; /* Some padding */
        cursor: pointer; /* Pointer/hand icon */
        float: left; /* Float the buttons side by side */
        margin-left: 45%;
    }
    .statement {
        margin-left: 30%;
        padding-top: 30px;
        height: 100px;
        width: 600px;
        background-color: bisque;
        text-align: center;
    }
</style>

<template>

    <div class = 'statement'>
        {{props[i].statement}}
    </div>
    <div class="form-group">
        <TabButton v-for="tab, i in props" :key="i"
                :text="tab.btn_text"
                :i="i"
                @onChange="(val) => updateText(val)">
        </TabButton>
    </div>

</template>
<script setup lang="ts">
import { ref } from 'vue';
import TabButton from './TabButton.vue'

    function updateText(val: number) {
        i.value = val
    }

    defineProps<{
        props: {
            statement: string,
            btn_text: string
    }[]}>()

    const i = ref(0)
</script>