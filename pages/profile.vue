<script setup>
definePageMeta({
  layout: 'profile',
});
useHead({
  title: 'profile',
});

onMounted( async() => {
    const token = useCookie('Authorization')
    fetch('https://api.spotify.com/v1/me', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => res.json()).then(result => console.log(result))
})
</script>

<template>
  <main>
    <h1>Spotify Profile</h1>
  </main>
</template>
