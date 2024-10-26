<template>
    <nav class="main-nav mobile-nav flex-column d-lg-none"
        style="min-height: 80px; height: auto;">
        <RouterLink :to="{ name: 'home' }" class="d-flex align-items-center" style="height: 80px;">
            <img src="/assets/images/logo.png" alt="logo" style="height: 44px; width: auto;">
        </RouterLink>
        <ul class="nav" style="border-bottom: 2px solid #0f6a71;">
            <li>
                <RouterLink class="menu-mobile-link" :to="{ name: 'home' }">Sommaires</RouterLink>
            </li>
            <li>
                <RouterLink class="menu-mobile-link" :to="{ name: 'search' }">Faire une recherche</RouterLink>
            </li>
            <li>
                <RouterLink class="menu-mobile-link" :to="{ name: 'faq' }">FAQ</RouterLink>
            </li>
            <li class="d-flex justify-content-center py-1">
                <RouterLink
                    class="menu-mobile-link d-flex justify-content-center align-items-center btn btn-shadow text-white text-uppercase fw-bold px-2"
                    :to="{ name: 'login' }"
                    style="background-color: #ffffff33; font-size: 12px; border-radius: 5px; height: 40px; color: black !important;">
                    Se connecter</RouterLink>
            </li>
            <li class="d-flex justify-content-center py-1">
                <RouterLink
                    class="menu-mobile-link d-flex justify-content-center align-items-center btn btn-shadow text-white text-uppercase fw-bold px-2"
                    :to="{ name: 'signup' }"
                    style="background-color: #f0a945; font-size: 12px; border-radius: 5px; height: 40px;">Créer un
                    compte</RouterLink>
            </li>
            <li><a href="#"><i class="fa fa-calendar"></i> Schedule a visit</a></li>
        </ul>
        <a class="menu-trigger">
            <span class="text-white">Menu</span>
        </a>
    </nav>
</template>