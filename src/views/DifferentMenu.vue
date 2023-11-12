<script setup>
import LienMaison from '../components/LienMaison.vue'; 
import LienNavbar from '../components/LienNavbar.vue';



const monComposants = { LienMaison };
</script>

<template>
  
  <div id="app">
    <h2>Menu avec LienMaison</h2>
    <nav>
      <monComposants.LienMaison />
      <a href="/about">A propos</a>
      <a href="/contact">Contact</a>
    </nav>
    <p>Bienvenue sur notre page d'<monComposants.LienMaison /></p>
  </div>

  <div id="app">
    <h2>Menu avec LienNavBar</h2>
    <nav>
      <LienNavbar lien="/" contenu="Accueil" />
      <LienNavbar lien="/about" contenu="A propos" />
      <LienNavbar lien="/contact" contenu="Contact" />
    </nav>
  </div>
  <div id="app">
    <h2>Menu avec router (sûrement la bonne pratique )</h2>
    <div id="nav">
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/apropos">A propos</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/cycle">Hooks de cycle de vie</RouterLink>
      <RouterLink to="/evenement_perso">Evenement Perso Parent Enfant</RouterLink>  
      <RouterLink to="/props">Props</RouterLink>    
    </div>
    <div class="testStyle">
      <RouterView />
    </div>
    
  </div>
</template>

<style scoped>
  .testStyle {
    width:1800px;
    height:600px;
    background-color: white;
    border: 2px solid black;
    margin:auto;

  }
</style>