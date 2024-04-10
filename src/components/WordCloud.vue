<template>
  <div class="word-cloud">
    <div v-if="wordCloudData && wordCloudData.length > 0"></div>
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
}
</style>
