<template lang="">
  <div class="flex justify-around bg-gray-100 py-4">
    <div class="flex flex-col px-4">
      <h2>Income</h2>
      <p class="text-xl font-bold text-green-600">
        <span>+$</span>{{ income }}
      </p>
    </div>
    <div class="flex flex-col px-4">
      <h2>Expence</h2>
      <p class="text-xl font-bold text-red-600"><span>-$</span>{{ expense }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  income: {
    type: Number,
    required: true,
  },
  expense: {
    type: Number,
    required: true,
  },
});
</script>
