<script setup>
const props = defineProps(['user']);


</script>
<template>
    <h1>Hello world</h1>
    <p>{{ props.user.name }} {{ props.user.age }}</p>
</template>