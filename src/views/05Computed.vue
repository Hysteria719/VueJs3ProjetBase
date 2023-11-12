<script setup>
import Props from '../components/02PropsPasseDeuxValeurs.vue';
import { computed, ref } from 'vue';   // ne pas oublié d'importer computed

const name = ref('Fabian');
const age = ref(41);
const sentence = computed(() => {
    return `Bonjour, je m'appelle ${name.value} et j'ai ${age.value}`;
});

</script>

<template>
    <h2>Computed => les valeurs calculées</h2>
    <p>Exemple la variable sentence doit changer si age et/ou name change </p>
    <Props/>
    <span>{{ sentence }}</span>
    <br><br>
    <input type="text" v-model="name">
    <input type="text" v-model="age">

</template>