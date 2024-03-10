<script setup>
definePageMeta({
    layout: 'login',
})
useHead({
    title: 'Login'
})
const counter = useState('counter')
</script>

<template>
    <div class="flex justify-center items-center mt-52">
        <h1>{{ counter }}</h1>
        <NuxtLink to="http://localhost:3000/api/login" class="py-1 px-4 bg-slate-500 rounded-full">Login</NuxtLink>
    </div>
</template>