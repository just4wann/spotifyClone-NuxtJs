<script setup>
const inputArtist = ref('')
const isAuth = useAuth();
</script>
<template>
  <main class="flex justify-between items-center py-[14px] px-5 bg-[#141313] sticky top-0 z-10">
    <div class="flex justify-center items-center gap-3">
      <div class="p-1 bg-black rounded-full hover:cursor-pointer">
        <NuxtImg src="/icons/prev.png" class="w-6" />
      </div>
      <div class="p-1 bg-black rounded-full hover:cursor-pointer">
        <NuxtImg src="/icons/next.png" class="w-6" />
      </div>
      <form @submit.prevent="useGetArtist(inputArtist)" class="group relative rounded-full">
        <NuxtImg src="/icons/search.png" class="absolute w-4 top-4 left-4 brightness-75 group-hover:brightness-100" />
        <input type="text" v-model="inputArtist" class="bg-[#292727] rounded-full w-72 h-12 px-12 text-[13px] placeholder:text-[13px] placeholder:text-slate-400 group-hover:ring-2 group-hover:ring-[#353333]" placeholder="What do you want to play?" />
      </form>
    </div>
    <HeaderUserLoggedIn v-if="isAuth" />
    <HeaderUserLoggedOut v-else />
  </main>
</template>
