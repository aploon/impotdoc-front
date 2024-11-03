<script setup>
import MobileNavBar from '@/components/utils/MobileNavBar.vue';
import NavBar from '@/components/utils/NavBar.vue';
import closeNavOnMobileLinkClicked from '@/scripts/others/close-nav';

import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const classifImpotActiveLink = (classifimpot) => {
    if (route.params.classifimpot === classifimpot) {
        return 'router-link-custom-active';
    }
    return '';
};

onMounted(() => {
    closeNavOnMobileLinkClicked();
});
</script>

<template>
    <!-- ***** Preloader Start ***** -->
    <!-- <div id="js-preloader" class="js-preloader">
        <div class="preloader-inner">
            <span class="dot"></span>
            <div class="dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div> -->
    <!-- ***** Preloader End ***** -->

    <NavBar />

    <!-- ***** Header Area Start ***** -->
    <header class="header-area header-sticky bg-primary">
        <div class="container expand-container h-100">
            <ul class="navbar-classif-impot-type d-none d-lg-flex align-items-center justify-content-center flex-wrap">
                <li class="classif-impot-type-item text-center d-flex align-items-stretch">
                    <RouterLink :class="'fw-bold text-white text-uppercase py-4 px-5 ' + classifImpotActiveLink('impot-direct')" :to="{
                        name: 'classifimpot',
                        params: { classifimpot: 'impot-direct'}
                    }" style="font-size: 16px;">IMPÔTS DIRECTS</RouterLink>
                </li>
                <li class="classif-impot-type-item text-center d-flex align-items-stretch">
                    <RouterLink :class="'fw-bold text-white text-uppercase py-4 px-5 ' + classifImpotActiveLink('impot-indirect')" :to="{
                        name: 'classifimpot',
                        params: { classifimpot: 'impot-indirect'}
                    }" style="font-size: 16px;">IMPÔTS INDIRECTS</RouterLink>
                </li>
                <li class="classif-impot-type-item text-center d-flex align-items-stretch">
                    <RouterLink :class="'fw-bold text-white text-uppercase py-4 px-5 ' + classifImpotActiveLink('enreg-timbre')" :to="{
                        name: 'classifimpot',
                        params: { classifimpot: 'enreg-timbre'}
                    }" style="font-size: 16px;">ENREGISTREMENT - TIMBRE</RouterLink>
                </li>
                <li class="classif-impot-type-item text-center d-flex align-items-stretch">
                    <RouterLink :class="'fw-bold text-white text-uppercase py-4 px-5 ' + classifImpotActiveLink('dispo-gene')" :to="{
                        name: 'classifimpot',
                        params: { classifimpot: 'dispo-gene'}
                    }" style="font-size: 16px;">DISPOSITIONS GÉNÉRALES</RouterLink>
                </li>
                <li class="classif-impot-type-item text-center d-flex align-items-stretch">
                    <RouterLink :class="'fw-bold text-white text-uppercase py-4 px-5 ' + classifImpotActiveLink('procedure-fiscale')" :to="{
                        name: 'classifimpot',
                        params: { classifimpot: 'procedure-fiscale'}
                    }" style="font-size: 16px;">PROCÉDURES FISCALES</RouterLink>
                </li>
                <li class="classif-impot-type-item text-center d-flex align-items-stretch">
                    <RouterLink :class="'fw-bold text-white text-uppercase py-4 px-5 ' + classifImpotActiveLink('dispo-finale')" :to="{
                        name: 'classifimpot',
                        params: { classifimpot: 'dispo-finale'}
                    }" style="font-size: 16px;">DISPOSITIONS FINALES</RouterLink>
                </li>
            </ul>

            <MobileNavBar />
        </div>
    </header>
    <!-- ***** Header Area End ***** -->
</template>

<style scoped>
    @media (min-width: 1750px) {
        .expand-container {
            max-width: 1820px;
        }
    }
</style>