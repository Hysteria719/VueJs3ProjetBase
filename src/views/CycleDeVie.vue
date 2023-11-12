<script setup>
const msg = 'Bonjour !';

const beforeCreate = () => console.log('Je ne suis pas encore créé');
const created = () => console.log('Je suis crée !');
const beforeMount = () => console.log('Je vais bienôt être monter sur le dom');
const mounted = () => console.log('Je suis monté sur le DOM');
const beforeDestroy = () => console.log('Je suis sur le point de disparaître du DOM !');
const destroy = () => console.log('Je suis supprimé');
</script>

<template>
    <h1 :class="$style.color">Je suis un nouveau composant !</h1>
</template>

<style module>
    .color {
        color: red;
    }
    
</style>