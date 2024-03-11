<script setup>
const isAuth = useAuth();
</script>
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
    <HeaderUserLoggedIn v-if="isAuth" />
    <HeaderUserLoggedOut v-else />
  </main>
</template>
