<template lang="">
  <div class="py-4">
    <p class="">Your balance:</p>
    <p class="text-xl font-bold"><span>$</span>{{ total }}</p>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
});
</script>
