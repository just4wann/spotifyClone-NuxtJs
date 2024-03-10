<script setup>
definePageMeta({
  layout: 'search',
});
useHead({
  title: 'Search',
});
</script>

<template>
  <HeaderSearch />
  <section class="p-5">
    <SearchCard />
  </section>
</template>
