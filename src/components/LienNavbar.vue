<script setup>
const props = defineProps(['lien','contenu']);
</script>

<template>
    <a :href="props.lien">{{ props.contenu }}</a>
</template>

<style scoped>
    a {
        margin-left: 10px;
    }
</style>

