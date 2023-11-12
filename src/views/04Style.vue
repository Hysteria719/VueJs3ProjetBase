<script setup>
import Props from '../components/03PropsPasseObjet.vue';   // juste pour l'exemple
import { ref } from 'vue';

const user = ref ({
    name: "Fabbb",
    age:21,
});
</script>

<template>
    <h2>On peut faire des style dynamique avec du code javascript en mettant :class="[Code javascript]" ne pas oublier ':'</h2>
    <p>Affiche en rouge si supérieur à 30 sinon en vert faire test en modifiant la variable dans le code</p>
    <Props :user="user"/>
    <div class="NomGras" :class="[user.age > 30 ? 'text-red' : 'text-green']"> {{ user.name }}</div>
    <p>Affiche en rouge si supérieur à 30 sinon en vert faire test en modifiant la variable dans le code</p>
    
</template>

<style scoped>
.NomGras {
    font-weight: bolder;
    font-size: 25px;
}
.text-green {
    color: green;
}
.text-red {
    color: red;
}
</style>