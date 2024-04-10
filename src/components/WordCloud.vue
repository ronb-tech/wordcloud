<template>
  <div class="word-cloud">
    <div v-if="wordCloudData && wordCloudData.length > 0">
      <h2>WordCloud: {{ catagoryName }}</h2>

      <div v-for="(item, index) in wordCloudData" :key="index">
        {{ item }}
      </div>
    </div>
    <div v-else>{{ msgError }}</div>
  </div>
</template>

<script setup>
import { defineProps, ref, computed } from "vue";

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  catagoryName: {
    type: String,
    default: "",
  },
});

const wordCloudData = computed(() => {
  console.log("props.data", wordCloudData);
  return props.data;
});
const msgError = ref("No data available to display.");
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";
.word-cloud {
  margin-top: $spacing-xl;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  height: 100%;
  padding: $spacing-sm;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
}
</style>
