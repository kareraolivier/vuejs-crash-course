<template lang="">
  <div class="py-4">
    <h2 class="underline font-semibold text-xl text-semibold">History</h2>
    <div v-for="trans in transactions" :key="trans.id">
      <div class="rounded-sm p-2 my-2 bg-gray-100 w-full flex justify-between">
        <p>{{ trans.title }}</p>
        <p class="flex items-center gap-1">
          {{ trans.amount }}$
          <span
            :class="{
              'bg-red-600': trans.amount < 0,
              'bg-green-600': trans.amount > 0,
              'bg-gray-400': trans.amount === 0,
            }"
            class="block w-2 h-2 rounded-md"
          >
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      transactions: [
        { id: 1, title: "pen", amount: -300 },
        { id: 2, title: "salary", amount: 3000 },
        { id: 3, title: "food", amount: -200 },
        { id: 4, title: "banana", amount: -30 },
        { id: 5, title: "math", amount: 0 },
        { id: 6, title: "income", amount: 30000 },
      ],
    };
  },
};
</script>
<style lang=""></style>
