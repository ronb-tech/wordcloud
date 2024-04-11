<template>
  <div class="word-cloud" v-if="wordCloudData && wordCloudData.length > 0">
    <h2>WordCloud: {{ catagoryName }}({{ wordCloudData.length }})</h2>
    <div id="canvas-word-cloud"></div>
  </div>
  <div v-else>{{ msgError }}</div>
</template>

<script setup>
import { defineProps, ref, computed, onMounted, watch } from "vue";
import { transformedArray, configGraph } from "@/utils/format.js";
import { Chart } from "@antv/g2";
let chart;

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
  initGraph();
});

const initGraph = () => {
  if (chart) {
    chart.clear();
  } else {
    const chart = new Chart({
      container: "canvas-word-cloud",
      autoFit: true,
      paddingTop: 40,
    });

    chart
      .data(wordCloudData.value)
      .wordCloud(configGraph)
      .encode("color", "text");

    chart.render();

    console.log("chart", chart);
  }
};

watch(
  () => props.data,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      initGraph();
    }
  },
  { deep: true }
);
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";
.word-cloud {
  width: 100%;
  height: auto;
  margin-top: $spacing-xl;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
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
