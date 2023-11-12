<script setup>
import PropsObject from '../components/03PropsPasseObjet.vue';
import { ref } from 'vue';

const user = ref({
    name: "George",
    age: 33,
});

const display = () => {
    console.log("Nom :" + user.value.name);
}
display();

</script>

<template>
    <PropsObject :user="user" />
    <h2>Si age est en dessous de 15 ans il cache la div</h2>
    <div v-if="user.age > 15">plus grand que 15 ans Affiche ce texte</div>
    <div v-else>Sinon affiche le else ici si plus petit que 15 jusque 15 ans</div>
    <br>
    <h2>On peut appeler par exemple une fonction dans le input voir code v-on input user.name(j'ai créer fonction qui affiche le nom dans la console)</h2>
    <h2>L'input nom ici va prendre chaque modif</h2>
    <input type="text" v-model="user.name" v-on:input="display">
    <input type="text" v-model="user.age">
    
    <h2>L'input ici va prendre le changement quand on sors de l'input et qu'on clique à coté</h2>
    <input type="text" v-model="user.name" v-on:change="display">
    
</template>