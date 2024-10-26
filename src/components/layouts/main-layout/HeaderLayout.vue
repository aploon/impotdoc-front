<script setup>
import MobileNavBar from '@/components/utils/MobileNavBar.vue';
import NavBar from '@/components/utils/NavBar.vue';

$(function() {
    $('.menu-mobile-link').on('click', function() {
        $('.menu-trigger').toggleClass('active');
        $('.header-area .nav').slideToggle(200);
    });
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
                <li class="classif-impot-type-item active text-center py-4 px-5">
                    <a class="fw-bold text-white text-uppercase" href="#" style="font-size: 16px;">IMPÔTS DIRECTS</a>
                </li>
                <li class="classif-impot-type-item text-center py-4 px-5">
                    <a class="fw-bold text-white text-uppercase" href="#" style="font-size: 16px;">IMPÔTS INDIRECTS</a>
                </li>
                <li class="classif-impot-type-item text-center py-4 px-5">
                    <a class="fw-bold text-white text-uppercase" href="#" style="font-size: 16px;">ENREGISTREMENT - TIMBRE</a>
                </li>
                <li class="classif-impot-type-item text-center py-4 px-5">
                    <a class="fw-bold text-white text-uppercase" href="#" style="font-size: 16px;">DISPOSITIONS GÉNÉRALES</a>
                </li>
                <li class="classif-impot-type-item text-center py-4 px-5">
                    <a class="fw-bold text-white text-uppercase" href="#" style="font-size: 16px;">PROCÉDURES FISCALES</a>
                </li>
                <li class="classif-impot-type-item text-center py-4 px-5">
                    <a class="fw-bold text-white text-uppercase" href="#" style="font-size: 16px;">DISPOSITIONS FINALES</a>
                </li>
            </ul>

            <MobileNavBar />
        </div>
    </header>
    <!-- ***** Header Area End ***** -->
</template>

<style>
    @media (min-width: 1750px) {
        .expand-container {
            max-width: 1820px;
        }
    }
</style>