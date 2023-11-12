<script setup>
    import SlotsSimple from '../components/05SlotsSimple.vue';
    import { reactive } from 'vue';

    const user = reactive({
        name: 'FabJass11',
        age: 41,
    });
</script>

<template>
    <SlotsSimple>
        <p> {{ user.name }}</p>
        <p>Fonctionne Bien peut-être utiliser les slots pour les menus surtout qu'il change suivant l'utilisateur
            et utiliser les props lorsqu'on doit afficher des données comme par exemple dans la base de donnée les transformer en objet
        </p>
    </SlotsSimple>
</template>

<style scoped>
p {
    border : 2px solid black;    
    width:500px;
}
</style>