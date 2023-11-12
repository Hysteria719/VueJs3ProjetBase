<script setup>
import TestEmettreEvent from '../components/06TestEmettreEvent.vue';

const display = (name) => {
    console.log('Affiche dans la page view : ' + name);
}
</script>

<template>
    <TestEmettreEvent @update-name="name => display(name)"/>
</template>