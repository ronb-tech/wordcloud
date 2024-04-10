<template>
  <div class="home-page">
    <h1>Home page</h1>
    <div class="word-cloud-section" v-if="!loading && !error && filteredData">
      <div class="tabs">
        <span
          v-for="category in categories"
          :key="category"
          @click="onSelectedCategory(category)"
          :class="{ active: category === selectedCategory }"
          tabindex="0"
        >
          {{ category }}
        </span>
      </div>
      <WordCloud
        :data="filteredData"
        :catagoryName="selectedCategory"
      ></WordCloud>
    </div>

    <div v-if="loading">
      <img :src="require('@/assets/loader.gif')" alt="Loading..." />
    </div>
    <div v-if="!loading && error">
      <h2>{{ error }}</h2>
    </div>
  </div>
</template>

<script setup lang="js">
import { onMounted, ref,computed } from "vue";
import { useStore } from "vuex";
import WordCloud from "@/components/WordCloud.vue";
import { getWordCloudData } from "@/service/index.js";

const store = useStore();
const wordCloudData = ref(null);
const error = ref(null);
const loading = ref(false);
const selectedCategory = ref(null);
const categories = ref([]);

const filteredData = computed(() => {
  if (!selectedCategory.value) return wordCloudData.value;
  const matchingKey = Object.keys(wordCloudData.value).find(key => key === selectedCategory.value);
  return wordCloudData.value[matchingKey]||[];
});

onMounted(async () => {
  try {
    loading.value = true;
    wordCloudData.value = await getWordCloudData();
    if(wordCloudData.value){
      categories.value= Object.keys(wordCloudData.value);
      selectedCategory.value= categories.value[0];
    }
    loading.value = false;
  } catch (e) {
    console.log("Failed to load word cloud data:", e);
    error.value = "Failed to load word cloud data";
    loading.value = false;
  }
});

const onSelectedCategory=(category)=>{
  selectedCategory.value = category
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";
.home-page {
  display: flex;
  flex-direction: column;
  gap: $spacing-xl;
  align-items: center;
  justify-content: center;
  width: 100%;

  .word-cloud-section {
    display: flex;
    flex-direction: column;
    gap: $spacing-xl;
    align-items: center;
    justify-content: center;

    .tabs {
      display: flex;
      gap: $spacing-lg;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-weight: bold;
      text-decoration: underline;
      text-transform: capitalize;
      font-size: $font-size-sm;
      span {
        &.active {
          color: $color-primary;
        }
      }
    }
  }
}
</style>
