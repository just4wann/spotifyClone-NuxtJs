<script setup></script>
<template>
  <main class="flex justify-between items-center bg-[#141313]">
    <div class="flex items-center gap-3">
      <button class="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold hover:scale-105">Explore Premium</button>
      <button class="flex items-center gap-2 px-3 py-2 rounded-full bg-black text-slate-100 text-xs font-semibold hover:scale-105 hover:cursor-pointer">
        <NuxtImg src="/icons/install.png" class="w-5" />
        <h1>Install App</h1>
      </button>
      <div class="p-2 bg-black rounded-full hover:cursor-pointer">
        <NuxtImg src="/icons/bell.png" class="w-5" />
      </div>
      <NuxtLink to="/profile">
        <div class="p-2 bg-black rounded-full hover:cursor-pointer">
          <NuxtImg src="/icons/user.png" class="w-5" />
        </div>
      </NuxtLink>
    </div>
  </main>
</template>
