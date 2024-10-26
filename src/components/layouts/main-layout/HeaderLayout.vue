<template>
    <!-- ***** Preloader Start ***** -->
    <div id="js-preloader" class="js-preloader">
        <div class="preloader-inner">
            <span class="dot"></span>
            <div class="dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
    <!-- ***** Preloader End ***** -->

    <div class="sub-header" style="background-color: #138a92;">
        <div class="d-flex h-100 justify-content-between align-items-stretch gap-2">
            <div class="ps-5 d-flex align-items-center">
                <img src="/assets/images/logo.png" alt="" style="height: 44px; width: auto;">
            </div>
            <div class="d-flex align-items-stretch justify-content-end flex-grow-1">  
                <ul class="navbar align-items-stretch">
                    <li class="d-flex align-items-center">
                        <RouterLink :to="{name: 'home'}">Sommaires</RouterLink>
                    </li>
                    <li class="d-flex align-items-center">
                        <RouterLink :to="{name: 'search'}">Faire une recherche</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="d-flex align-items-center gap-3 pe-5">
                <button class="btn btn-shadow text-white text-uppercase fw-bold" style="background-color: #ffffff33; font-size: 12px;">Se connecter</button>
                <button class="btn btn-shadow text-white text-uppercase fw-bold" style="background-color: #f0a945; font-size: 12px;">Créer un compte</button>
            </div>
        </div>
    </div>

    <!-- ***** Header Area Start ***** -->
    <header class="header-area header-sticky bg-primary">
        <div class="containertest">
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
        </div>
    </header>
    <!-- ***** Header Area End ***** -->
</template>