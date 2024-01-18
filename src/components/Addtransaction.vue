<template lang="">
  <div class="py-4">
    <h2 class="underline font-semibold text-xl text-semibold">
      Add Transaction
    </h2>
    <form action="post">
      <input
        class="rounded-sm p-2 my-2 bg-gray-100 w-full"
        type="text"
        name="title"
        placeholder="Enter text.."
        id=""
      />
      <input
        class="rounded-sm p-2 my-2 bg-gray-100 w-full"
        type="text"
        name="amount"
        placeholder="Enter amount.."
        id=""
      />
      <button
        class="rounded-sm p-2 my-2 bg-green-600 hover:bg-green-700 text-white w-full"
        type="button"
      >
        Add expense
      </button>
    </form>
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style lang=""></style>
