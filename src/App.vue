<script setup lang="ts">
import TabControler from "./components/TabControler.vue";
</script>

<template>
  <TabControler
    :statements="['texto 1', 'texto 2']"
    :btn_texts="['B1', 'B2']"
  ></TabControler>
</template>
