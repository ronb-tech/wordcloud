<template>
  <div class="home-page">
    <h1>Home page</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const msg = ref("hello");
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";
.home-page {
}
</style>
