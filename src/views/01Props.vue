<script setup>
import PropsSimple from '../components/01PropsSimple.vue';
import Props2Vals from '../components/02PropsPasseDeuxValeurs.vue';
import PropObjet from '../components/03PropsPasseObjet.vue';
import PropObjectReactive from '../components/04PropsPourReactive.vue';
import { ref } from 'vue'; // importer ref pour l'utiliser
import { reactive } from 'vue'; // importer reactive pour l'utiliser

//const sousTitre = 'Sous titre Simple';         // Simple
const sousTitre = ref("Sous titre Simple");      // ref pour la réactiviter

// réactive ref avec deux valeurs
const name = ref("Fabian");
const age = ref (41);

// réactive ref avec objet
const user = ref({
    name: 'FabJass',
    age: 41,
});
const userReactive = reactive({
    nameReact: 'FabJassReact',
    ageReact:999,
});

/* On peut utiliser du javascript exemple fonction qui renvoie dans la console le nom et l'age 
    ne pas oublier.value sinon il va donner le DOM biensûr ici on utilise ref
*/
const display = () => {
    console.log("ref => donc utilise le DOM .value doit être mis sinon retourne la balise");
    console.log("------------------------------------------------------------------------");
    console.log(name.value + "  " + age.value);
}
display();

/* la même fonction mais avec reactive il utilise directement la valeur donc pas .value  */
const displayReactive = () => {
    console.log("")
    console.log("reactive => Pas de DOM donc ne pas mettre .value");
    console.log("------------------------------------------------");
    console.log(userReactive.nameReact + " " + userReactive.ageReact);

}
displayReactive();
</script>

<template>
    <div>
        <h1>Props veut dire propriéter</h1>
        <h2>passe variable Simplement </h2>
        <PropsSimple :sous-titre="sousTitre"/>
        <br>
        <h1> Ref donc reactiviter utilise le DOM, reactive lui n'utilise pas la DOM et est réactive aussi </h1>
        <h2>Props avec ref sinon sans ref en enlevant les commentaires et mettre les // à ref</h2>
        <PropsSimple :sous-titre="sousTitre" />
        <input type="text" v-model="sousTitre">
        <br>
        
        <h2>Props passe 2 valeurs avec ref, donc réactiviter</h2>
        <Props2Vals :name="name" :age="age"/>
        <input type="text" v-model="name">
        <input type="text" v-model="age">
        <br>

        <h2>Props passe objet avec ref, donc reactiviter</h2>        
        <PropObjet :user="user" />
        <input type="text" v-model="user.name">
        <input type="text" v-model="user.age">
        <br>

        <h2>La même chôse avec reactive ,la différence est que reactive n'utilise pas le DOM comparer à ref</h2>
        <PropObjectReactive :userReactive="userReactive" />
        <input type="text" v-model="userReactive.nameReact">
        <input type="text" v-model="userReactive.ageReact">

        

    </div>
</template>

<style scoped>
h2, h1 {
    color:Blue;
}
</style>