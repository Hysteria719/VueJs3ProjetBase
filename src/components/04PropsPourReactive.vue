<script setup>
const props = defineProps(['userReactive']);


</script>
<template>
    <h1>Hello world</h1>
    <p>{{ props.userReactive.nameReact }} {{ props.userReactive.ageReact }}</p>
</template>