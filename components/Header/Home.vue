<script setup></script>
<template>
  <main class="flex justify-between items-center p-5 bg-[#141313] sticky top-0 z-10">
    <div class="flex justify-center items-center gap-3">
      <div class="p-1 bg-black rounded-full hover:cursor-pointer">
        <NuxtImg src="/icons/prev.png" class="w-6" />
      </div>
      <div class="p-1 bg-black rounded-full hover:cursor-pointer">
        <NuxtImg src="/icons/next.png" class="w-6" />
      </div>
    </div>
    <div class="flex items-center gap-3">
      <button class="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold hover:scale-105">Explore Premium</button>
      <button class="flex items-center gap-2 px-3 py-2 rounded-full bg-black text-slate-100 text-xs font-semibold hover:scale-105 hover:cursor-pointer">
        <NuxtImg src="/icons/install.png" class="w-5" />
        <h1>Install App</h1>
      </button>
      <div class="p-2 bg-black rounded-full hover:cursor-pointer">
        <NuxtImg src="/icons/bell.png" class="w-5" />
      </div>
      <NuxtLink to="/login" class="p-2 bg-black rounded-full hover:cursor-pointer">
        <NuxtImg src="/icons/user.png" class="w-5" />
      </NuxtLink>
    </div>
  </main>
</template>
