<script setup>
import NavBar from '@/components/utils/NavBar.vue';
import MobileNavBar from '@/components/utils/MobileNavBar.vue';
import closeNavOnMobileLinkClicked from '@/scripts/others/close-nav';

import { onMounted } from 'vue';

onMounted(() => {
    closeNavOnMobileLinkClicked();
});
</script>

<template>
    <NavBar />

    <!-- ***** Header Area Start ***** -->
    <header class="header-area header-sticky bg-primary">
        <div class="container expand-container h-100">
            <MobileNavBar />
        </div>
    </header>
    <!-- ***** Header Area End ***** -->
</template>