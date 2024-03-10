<script setup lang="ts">
definePageMeta({
  layout: 'home',
});
useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'Lets rock!',
    },
  ],
});
</script>

<template>
  <HeaderHome />
  <section class="flex flex-col gap-8 p-5 ">
    <PopularArtists />
    <PopularAlbums />
    <PopularAlbums />
  </section>
</template>
