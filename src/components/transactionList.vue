<template lang="">
  <div class="py-4">
    <h2 class="underline font-semibold text-xl text-semibold">History</h2>
    <div
      v-for="trans in transactions"
      :key="trans.id"
      class="transaction-item flex gap-2 items-center"
    >
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
      <button
        @click="deleteTransaction(trans.id)"
        class="delete-text cursor-pointer text-white bg-red-600 p-2 rounded-sm font-semibold"
      >
        del
      </button>
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

const emit = defineEmits(["TransactionDeleted"]);
const deleteTransaction = (id: number) => id && emit("TransactionDeleted", id);
</script>

<style>
.transaction-item .delete-text {
  display: none;
}
.transaction-item:hover .delete-text {
  display: block;
}
</style>
