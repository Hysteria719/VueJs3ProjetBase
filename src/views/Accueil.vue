<script setup>
import PersonaliserBoutton from '../components/PersonaliserBoutton.vue';
import TestProps from '../components/TestProps.vue';
</script>
<template>
    <div id="app" class="app">
        <h1>Page d'accueil Surement sans le header et footer le centre de la page </h1>
        <h2>Test bouton personnaliser à utiliser plusieurs fois</h2>
        <PersonaliserBoutton texte="Mon bouton"/>
        <h2>Test Props</h2>
        <TestProps :list="['cool','Test 2 ème ligne','3 ème lignes']" title="Ké beau titre1" count="25" />

    </div>
</template>