<template>
  <div class="flex justify-center items-center h-screen">
    <div>
      <Header />
      <Balance />
      <IncomeExpence />
      <AddTransaction />
      <TransactionList />
    </div>
  </div>
</template>

<script lang="ts">
import Header from "./components/header.vue";
import Balance from "./components/balance.vue";
import IncomeExpence from "./components/incomeExpence.vue";
import AddTransaction from "./components/Addtransaction.vue";
import TransactionList from "./components/transactionList.vue";

export default {
  components: {
    Header,
    Balance,
    IncomeExpence,
    AddTransaction,
    TransactionList,
  },
};
</script>
