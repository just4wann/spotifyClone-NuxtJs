<script setup>
import { ref } from 'vue';
const checkHome = ref();
const checkSearch = ref();
</script>
<template>
  <ul class="flex flex-col justify-center items-start gap-2 px-4 py-2 bg-[#141313] w-full rounded-lg font-semibold">
    <Logo />
    <NuxtLink to="/" class="group relative flex justify-start items-center gap-5 w-full p-2">
      <input type="checkbox" class="check peer/home hover:cursor-pointer" v-model="checkHome" />
      <NuxtImg src="/icons/home-light.png" class="w-5 brightness-75 group-hover:brightness-100 peer-checked/home:brightness-100" />
      <h1 class="brightness-75 group-hover:brightness-100 peer-checked/home:brightness-100 text-md font-normal">Home</h1>
    </NuxtLink>
    <NuxtLink to="/search" class="group relative flex justify-start items-center gap-5 w-full p-2">
      <input type="checkbox" class="check peer/search hover:cursor-pointer" v-model="checkSearch" />
      <NuxtImg src="/icons/search.png" class="w-5 brightness-75 group-hover:brightness-100 peer-checked/search:brightness-100" />
      <h1 class="brightness-75 group-hover:brightness-100 peer-checked/search:brightness-100 text-md font-normal">Search</h1>
    </NuxtLink>
  </ul>
</template>
