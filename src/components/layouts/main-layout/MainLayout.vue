<template>
    <HeaderLayout />
    <RouterView />
    <FooterLayout />
</template>

<script setup>
import allInit from '@/scripts/init-scripts/all-init';
import { onMounted } from 'vue';
import FooterLayout from './FooterLayout.vue';
import HeaderLayout from './HeaderLayout.vue';

onMounted(() => {

    // Init all plugin scripts when the page is loaded
    allInit($);

});
</script>