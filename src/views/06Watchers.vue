<script setup>
import Props from '../components/02PropsPasseDeuxValeurs.vue'
import { watch, ref } from 'vue'

const name = ref('Fabian');
const age = ref(41);

watch(name, (nouvelValeur, ancienValeur) => {
    console.log(nouvelValeur, ancienValeur);
})
</script>

<template>
    <h2>les watchers c'est du code que l'on va surveiller, c'est une variable que l'on va surveiller ne pas confondre avec computed qui est une valeur qu'on recalcule</h2>
    <Props/>
    <p>Avec un simple watch et un console.log il va afficher dans la console l'ancienne valeur et la nouvelle pour le Nom </p>
    <span>Test nom : {{ name }} et age: {{ age }}</span>
    <br><br>
    <input type="text" v-model="name">
    <input type="text" v-model="age">

</template>

<style scoped>
    h2 {
        width : 1000px;
    }
</style>