<template>
  <div class="flex justify-center items-center h-screen p-2">
    <div>
      <Header />
      <Balance :total="total" />
      <IncomeExpence :income="income" :expense="expense" />
      <AddTransaction @TransactionSubmited="handleSubmitedData" />
      <TransactionList
        :transactions="transactions"
        @TransactionDeleted="handleTransactionDelete"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import Header from "./components/header.vue";
import Balance from "./components/balance.vue";
import IncomeExpence from "./components/incomeExpence.vue";
import AddTransaction from "./components/Addtransaction.vue";
import TransactionList from "./components/transactionList.vue";
import { Transaction } from "./components/types/interface";
import { useToast } from "vue-toastification";
const toast = useToast();
const transactions = ref<Transaction[]>([]);

// get data from local storage
onMounted(() => {
  const savedTransactionString = localStorage.getItem("transaction");
  if (savedTransactionString) {
    const savedTransaction = JSON.parse(savedTransactionString);
    if (savedTransaction) {
      transactions.value = savedTransaction;
    }
  }
});
const total = computed(() =>
  transactions.value.reduce((acc, trans) => acc + trans.amount, 0)
);

const income = computed(() =>
  transactions.value.reduce(
    (acc, trans) => (trans.amount > 0 ? acc + trans.amount : acc),
    0
  )
);
const expense = computed(() =>
  transactions.value.reduce(
    (acc, trans) => (trans.amount < 0 ? acc - trans.amount : acc),
    0
  )
);

const genelateUniqueId = () => Math.floor(Math.random() * 10000);

//add transaction
const handleSubmitedData = (submitData: any) => {
  transactions.value.unshift({ ...submitData, id: genelateUniqueId() });
  savedTransactionToLocalStorage();
  toast.success("transactions completed");
};

//delete transaction
const handleTransactionDelete = (id?: number) => {
  if (id) alert("do you want to delete this transaction?");
  transactions.value = transactions.value.filter((trans) => trans.id != id);
  savedTransactionToLocalStorage();
  toast.success("delete completed");
};

//save to local storage
const savedTransactionToLocalStorage = () => {
  localStorage.setItem("transaction", JSON.stringify(transactions.value));
};
</script>
