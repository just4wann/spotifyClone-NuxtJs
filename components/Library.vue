<template>
  <main class="flex justify-between items-center p-2">
    <div class="group flex justify-center items-center gap-3 hover:cursor-pointer">
      <NuxtImg src="/icons/library.png" class="w-5 brightness-75 group-hover:brightness-100" />
      <h1 class="brightness-75 group-hover:brightness-100 text-md font-normal">Your Library</h1>
    </div>
    <div class="flex justify-center items-center gap-3">
      <div class="p-2 rounded-full hover:bg-[#292727] hover:cursor-pointer">
        <NuxtImg src="/icons/plus.png" class="w-3" />
      </div>
    </div>
  </main>
</template>
