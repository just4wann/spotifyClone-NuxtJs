<script setup lang="ts"></script>
<template>
  <main class="flex flex-col gap-4">
    <h1 class="text-xl font-semibold">Browse all</h1>
    <ul class="flex justify-start items-center gap-8 flex-wrap">
      <li v-for="card in 31" class="w-44 h-44 bg-green-600 rounded-xl hover:cursor-pointer"></li>
    </ul>
  </main>
</template>
