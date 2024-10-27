<template>

    <HeaderLayout />

    <slot></slot>

</template>

<script setup>
// function handleColorTheme(e) {
//     document.documentElement.setAttribute("data-color-theme", e);
// }

import allInit from '@/scripts/init-scripts/all-init';
import { onMounted } from 'vue';
import HeaderLayout from './HeaderLayout.vue';

onMounted(() => {

    // Init all plugin scripts when the page is loaded
    allInit($);

});
</script>