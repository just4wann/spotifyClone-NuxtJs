<script setup>
definePageMeta({
  layout: 'profile',
});
useHead({
  title: 'profile',
});

const payload = ref(null);
onMounted(async () => {
  const data = await useGetProfile()
  payload.value = data
});
</script>

<template>
  <main>
    <h1>Spotify Profile</h1>
    <ul>
      <li>{{ payload?.display_name }}</li>
    </ul>
  </main>
</template>
