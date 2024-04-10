<template>
  <div class="word-cloud">
    <h2>WordCloud: {{ catagoryName }}</h2>

    <div v-if="wordCloudData && wordCloudData.length > 0">
      <div id="canvas-word-cloud"></div>
    </div>
    <div v-else>{{ msgError }}</div>
  </div>
</template>

<script setup>
import { defineProps, ref, computed, onMounted } from "vue";
import { transformedArray } from "@/utils/format.js";
import { Chart } from "@antv/g2";

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
const msgError = ref("No data available to display.");

const wordCloudData = computed(() => {
  const transformedData = transformedArray(props.data);
  console.log("props.data", transformedData);

  return transformedData.length > 0 ? transformedData : [];
});

onMounted(() => {
  const chart = new Chart({
    container: "canvas-word-cloud",
    autoFit: true,
    paddingTop: 40,
  });

  chart
    .wordCloud()
    .data(wordCloudData.value)
    .layout({
      spiral: "rectangular",
    })

    .encode("color", "text");

  chart.render();
});
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
  flex-direction: column;
  gap: $spacing-md;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  #canvas-word-cloud {
    width: 100%;
    height: 100%;
  }
}
</style>
