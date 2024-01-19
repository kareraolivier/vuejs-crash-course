<template>
  <nav
    class="flex justify-center gap-6 font-medium text-lg py-4 text-white bg-green-600"
  >
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script lang="ts" setup>
import { createRouter, createWebHistory } from "vue-router";
</script>
