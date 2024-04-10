<template>
  <div class="home-page">
    <h1>Home page</h1>
    <WordCloud></WordCloud>
  </div>
</template>

<script setup lang="js">
import { computed, onMounted, ref,watch } from "vue";
import { useStore } from "vuex";
import WordCloud  from "@/components/WordCloud.vue";
import {getWordCloudData} from "@/service/index.js";

const store = useStore();
const wordCloudData=ref(null);
onMounted(() => {
  wordCloudData.value=getWordCloudData();
});
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";
.home-page {
}
</style>
