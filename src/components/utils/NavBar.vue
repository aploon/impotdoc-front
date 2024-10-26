<template>
    <div class="sub-header" style="background-color: #138a92;">
        <div class="d-flex h-100 justify-content-between align-items-stretch gap-2">
            <div class="ps-5 d-flex align-items-center">
                <RouterLink :to="{name: 'home'}">
                    <img src="/assets/images/logo.png" alt="logo" style="height: 44px; width: auto;">
                </RouterLink>
            </div>
            <div class="d-flex align-items-stretch justify-content-end flex-grow-1">  
                <ul class="navbar align-items-stretch">
                    <li class="d-flex align-items-stretch">
                        <RouterLink :to="{name: 'home'}" class="d-flex align-items-center">Sommaires</RouterLink>
                    </li>
                    <li class="d-flex align-items-stretch">
                        <RouterLink :to="{name: 'search'}" class="d-flex align-items-center">Faire une recherche</RouterLink>
                    </li>
                    <li class="d-flex align-items-stretch">
                        <RouterLink :to="{name: 'faq'}" class="d-flex align-items-center">FAQ</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="d-flex align-items-center gap-3 pe-5">
                <RouterLink :to="{name: 'login'}" class="btn btn-shadow text-white text-uppercase fw-bold" style="background-color: #ffffff33; font-size: 12px;">Se connecter</RouterLink>
                <RouterLink :to="{name: 'signup'}" class="btn btn-shadow text-white text-uppercase fw-bold" style="background-color: #f0a945; font-size: 12px;">Créer un compte</RouterLink>
            </div>
        </div>
    </div>
</template>