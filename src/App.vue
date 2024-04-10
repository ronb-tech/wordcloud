<template>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";
</style>
