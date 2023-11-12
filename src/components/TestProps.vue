<script setup>


 defineProps({
    title: {
        type: String,
        default: "Mets un putain de titre bordel"
    },
    list: {
        type: Array,
        default: () => []
    },
    count: {
        Number,
        default: 1
    }
 })
</script>

<template>
    <div>
        <h1>{{ title }} # {{ count }}</h1>
        <ul>
            <li v-for="item in list" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>