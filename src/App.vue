<template>
  <Header></Header>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <Footer></Footer>
</template>

<script setup>
import Header from "@/views/Header.vue";
import Footer from "@/views/Footer.vue";
import { useStore } from "vuex";
const store = useStore();

const demoName = "Ron ";

store.dispatch("initDemoUser", demoName);
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";
</style>
