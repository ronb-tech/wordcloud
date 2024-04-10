<template>
  <div class="home-page">
    <h1>Home page</h1>
    <WordCloud
      v-if="!loading && !error && wordCloudData"
      :data="wordCloudData"
    ></WordCloud>
    <div v-if="loading">
      <img :src="require('@/assets/loader.gif')" alt="Loading..." />
    </div>
    <div v-if="!loading && error">
      <h2>{{ error }}</h2>
    </div>
  </div>
</template>

<script setup lang="js">
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import WordCloud from "@/components/WordCloud.vue";
import { getWordCloudData } from "@/service/index.js";

const store = useStore();
const wordCloudData = ref(null);
const error = ref(null);
const loading = ref(false);

onMounted(async () => {
  try {
    loading.value = true;
    wordCloudData.value = await getWordCloudData();
    loading.value = false;
  } catch (e) {
    console.log("Failed to load word cloud data:", e);
    error.value = "Failed to load word cloud data";
    loading.value = false;
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";
.home-page {
  display: flex;
  flex-direction: column;
  gap: $spacing-xl;
  align-items: center;
  justify-content: center;
}
</style>
