<template>
  <Navbar />
  <div class="flex justify-center h-screen p-4">
    <router-view> </router-view>
  </div>
</template>
<script lang="ts" setup>
import Navbar from "./components/navbar/navbar.vue";
</script>
