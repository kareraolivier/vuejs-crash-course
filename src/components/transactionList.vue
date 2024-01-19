<template lang="">
  <div class="py-4">
    <h2 class="underline font-semibold text-xl text-semibold">History</h2>
    <div v-for="trans in transactions" :key="trans.id">
      <div class="rounded-sm p-2 my-2 bg-gray-100 w-full flex justify-between">
        <p>{{ trans.title }}</p>
        <p class="flex items-center gap-1 cursor-pointer">
          {{ trans.amount }}$
          <span
            :class="trans.amount < 0 ? 'bg-red-600' : 'bg-green-600'"
            class="block w-2 h-2 rounded-md"
          >
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  transactions: {
    type: Array,
    required: true,
  },
});
</script>
