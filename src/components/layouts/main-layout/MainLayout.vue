<template>
    <HeaderLayout />
    <RouterView />
    <FooterLayout />
</template>

<script setup>
    import HeaderLayout from './HeaderLayout.vue';
    import FooterLayout from './FooterLayout.vue';
</script>