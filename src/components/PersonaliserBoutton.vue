<script setup>
const props = defineProps (['texte']);
</script>

<template>
    <button class="button">{{ props.texte }}</button>
</template>

<style>
    .button {        
        background-color: blue;
        color: white;
        border-top-right-radius: 20px;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 30px;
        width:105px;
        height: 30px;
    }
    .button:active {
        background-color: darkorange;
        box-shadow: 2px 2px 10px blue inset;

        
    }
</style>