<script setup lang="ts"></script>
<template>
  <main class="flex flex-col gap-2">
    <section class="flex justify-between items-center">
      <h1 class="text-xl font-semibold">Popular albums</h1>
      <NuxtLink class="text-sm font-semibold brightness-75 hover:cursor-pointer hover:underline">Show all</NuxtLink>
    </section>
    <ul class="flex gap-4">
      <li v-for="artist in 5" class="group relative flex flex-col gap-2 w-48 h-64 bg-[#1c1b1b] p-5 rounded-lg transition-all hover:bg-[#2c2c2b] hover:cursor-pointer">
        <NuxtImg src="/icons/square.png" class="w-80" />
        <section class="flex flex-col justify-start">
          <p class="text-lg font-semibold">Album name</p>
          <p class="text-sm brightness-50">Artist name</p>
        </section>
        <PlayButton class="transition-all group-hover:opacity-100 group-hover:translate-y-24 hover:brightness-105 hover:scale-105" />
      </li>
    </ul>
  </main>
</template>
