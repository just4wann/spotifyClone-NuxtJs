<script setup></script>
<template>
  <main class="flex justify-between items-center bg-[#141313]">
    <div class="flex items-center gap-3">
      <button class="px-5 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold hover:scale-105 hover:cursor-pointer">Sign up</button>
      <button class="px-6 py-2 rounded-full bg-black text-slate-100 text-sm font-semibold hover:scale-105 hover:cursor-pointer">
        <NuxtLink to="http://localhost:3000/api/login">Log in</NuxtLink>
      </button>
    </div>
  </main>
</template>
