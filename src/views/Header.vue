<template>
  <div class="header">
    <div class="menu">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="user-section">Hello,{{ getUserName }}</div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const getUserName = computed(() => store.state.userName);
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";
</style>
