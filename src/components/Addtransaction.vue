<template lang="">
  <div class="py-4">
    <h2 class="underline font-semibold text-xl text-semibold">
      Add Transaction
    </h2>
    <form @submit.prevent="onSubmit">
      <input
        class="rounded-sm p-2 my-2 bg-gray-100 w-full"
        type="text"
        name="title"
        placeholder="Enter income or expence.."
        id="title"
        v-model="title"
      />
      <input
        class="rounded-sm p-2 my-2 bg-gray-100 w-full"
        type="text"
        name="amount"
        placeholder="If you want to write expense use '-' like (-23)"
        id="amount"
        v-model="amount"
      />
      <button
        class="rounded-sm p-2 my-2 bg-green-600 hover:bg-green-700 text-white w-full"
      >
        Add expense
      </button>
    </form>
  </div>
</template>
<script lang="ts" setup>
import { useToast } from "vue-toastification";
import { ref } from "vue";

const toast = useToast();
const title = ref("");
const amount = ref("");
const emit = defineEmits(["TransactionSubmited"]);

function onSubmit() {
  if (!title.value || !amount.value) {
    toast.error("Incomplete data");
  } else {
    const submitData = {
      title: title.value,
      amount: parseFloat(amount.value),
    };

    emit("TransactionSubmited", submitData);
    (title.value = ""), (amount.value = "");
  }
}
</script>
