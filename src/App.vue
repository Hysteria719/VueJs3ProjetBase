<script setup>

</script>

<template>   
  <div id="app">
    <h2>Menu avec router (sûrement la bonne pratique )</h2>
    <nav class="nav">
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/apropos">A propos</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/different_menu">Différent Menus</RouterLink>
      <RouterLink to="/cycle">Hooks de cycle de vie</RouterLink>      
      <RouterLink to="/props">Props</RouterLink>    
      <RouterLink to="/evenement">Evenement</RouterLink>
      <RouterLink to="/slots">Slots</RouterLink>
      <RouterLink to="/style">Style</RouterLink>
      <RouterLink to="/computed">Computed valeurs calculées</RouterLink>
      <RouterLink to="/watchers">Watchers surveille variable</RouterLink>
      <RouterLink to="/evenement_perso">Evenement Perso Parent Enfant</RouterLink>  
    </nav>
    <div class="testStyle">
      <RouterView />
    </div>
    
  </div>
</template>

<style scoped>
  .testStyle {
    width:1880px;
    height:auto;
    background-color: white;
    border: 2px solid black;
    margin:auto;

  }
  .nav > a{
    margin-left: 25px;    
  }
</style>
