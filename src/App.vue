<template>
  <div class="flex justify-center items-center h-screen p-2">
    <div>
      <Header />
      <Balance :total="total" />
      <IncomeExpence :incomeExpence="[income, expense]" />
      <AddTransaction @TransactionSubmited="handleSubmitedData" />
      <TransactionList :transactions="transactions" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import Header from "./components/header.vue";
import Balance from "./components/balance.vue";
import IncomeExpence from "./components/incomeExpence.vue";
import AddTransaction from "./components/Addtransaction.vue";
import TransactionList from "./components/transactionList.vue";
import { Transaction } from "./components/types/interface";
import { useToast } from "vue-toastification";
const toast = useToast();
const transactions = ref<Transaction[]>([
  { id: 1, title: "pen", amount: -300 },
  { id: 2, title: "salary", amount: 3000 },
  { id: 3, title: "food", amount: -200 },
  { id: 4, title: "banana", amount: -210 },
  { id: 5, title: "math", amount: 0 },
  { id: 6, title: "income", amount: 30000 },
]);

const total = computed(() =>
  transactions.value.reduce((acc, trans) => acc + trans.amount, 0)
);
const [income, expense] = [
  computed(() =>
    transactions.value.reduce(
      (acc, trans) => (trans.amount > 0 ? acc + trans.amount : acc),
      0
    )
  ),
  computed(() =>
    transactions.value.reduce(
      (acc, trans) => (trans.amount < 0 ? acc - trans.amount : acc),
      0
    )
  ),
];
const genelateUniqueId = () => Math.floor(Math.random() * 10000);
const handleSubmitedData = (submitData: any) => {
  transactions.value.unshift({ ...submitData, id: genelateUniqueId() });
  toast.success("transactions completed");
};
</script>
