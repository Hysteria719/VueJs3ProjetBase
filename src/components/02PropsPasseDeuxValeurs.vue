<script setup>
const props = defineProps(['name','age']);


</script>
<template>
    <h1>Hello world</h1>
    <p>{{ props.name }} {{ props.age }}</p>
</template>