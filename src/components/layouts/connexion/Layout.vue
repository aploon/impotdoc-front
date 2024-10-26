<template>
    
    <HeaderLayout />

    <slot></slot>

</template>

<script setup>
    // function handleColorTheme(e) {
    //     document.documentElement.setAttribute("data-color-theme", e);
    // }

    import HeaderLayout from './HeaderLayout.vue';
</script>