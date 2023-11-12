<script setup>
import { ref } from 'vue';

const emit = defineEmits(['updateName']);

const handleUpdate = (event) => {
    emit('updateName', event.target.value);
}

const name = ref('');
</script>
<template>
    <h1> Hello world </h1>
    <h2>Récupère l'evenement depuis la classe enfant</h2>
    <p>Lorsqu'on change la valeur de l'input coté enfant on le vois dans la console coté parent </p>

    {{ name }}

    <input type="text" v-model="name" @input="handleUpdate">
    
</template>