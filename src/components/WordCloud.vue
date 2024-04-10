<template>
  <div class="word-cloud">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup>
import { ref } from "vue";
const msg = ref("hello from the cloud");
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";
.word-cloud {
}
</style>
