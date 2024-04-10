<template>
  <div class="word-cloud">
    <div v-if="wordCloudData && wordCloudData.length > 0">
      <h2>WordCloud: {{ catagoryName }}</h2>

      <div v-for="item in wordCloudData" :key="item.id">
        {{ item?.title }}
      </div>
    </div>
    <div v-else>{{ msgError }}</div>
  </div>
</template>

<script setup>
import { defineProps, ref, computed } from "vue";
import { transformedArray } from "@/utils/format.js";

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
  const transformedData = transformedArray(props.data);
  console.log("props.data", transformedData);

  return transformedData.length > 0 ? transformedData : [];
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
