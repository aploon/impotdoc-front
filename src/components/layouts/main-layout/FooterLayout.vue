<template>
    <footer>
        <div class="container">
            <div class="quicklink d-flex justify-content-start flex-wrap pt-3 gap-3">
                <div class="logo">
                    <img src="/assets/images/logo.png" alt="" style="width: 250px;">
                </div>
                <div class="footer-quick-links">
                    <span class="text-white"><u>Quick link</u></span>
                    <ul class="d-flex flex-column align-items-center mt-2 gap-2">
                        <li class="d-flex align-items-center w-100 classif-impot-item active">
                            <RouterLink :to="{name: 'home'}" class="flex-grow-1 text-white active">Sommaires</RouterLink>
                        </li>
                        <li class="d-flex align-items-center w-100 classif-impot-item active">
                            <RouterLink :to="{name: 'search'}" class="flex-grow-1 text-white">Faires une recherche</RouterLink>
                        </li>
                        <li class="d-flex align-items-center w-100 classif-impot-item active">
                            <RouterLink :to="{name: 'login'}" class="flex-grow-1 text-white">Se connecter</RouterLink>
                        </li>
                        <li class="d-flex align-items-center w-100 classif-impot-item active">
                            <RouterLink :to="{name: 'signup'}" class="flex-grow-1 text-white"><u>Vous n'avez pas de compte ?</u></RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="footer-others-links">
                    <ul class="d-flex flex-column align-items-center mt-2 gap-2">
                        <li class="d-flex align-items-center w-100 classif-impot-item active">
                            <RouterLink :to="{name: 'loi-finance'}" class="flex-grow-1 text-white active">Loi de finances 2024</RouterLink>
                        </li>
                        <li class="d-flex align-items-center w-100 classif-impot-item active">
                            <RouterLink :to="{name: 'code-general'}" class="flex-grow-1 text-white">Code général des impots 2024</RouterLink>
                        </li>
                        <li class="d-flex align-items-center w-100 classif-impot-item active">
                            <RouterLink :to="{name: 'direction-impot'}" class="flex-grow-1 text-white">Direction générale des impots</RouterLink>
                        </li>
                    </ul>
                </div>

                <div class="footer-others-links">
                    <ul class="d-flex flex-column align-items-center mt-2 gap-2">
                        <li class="d-flex align-items-center w-100 classif-impot-item active">
                            <RouterLink :to="{name: 'faq'}" class="flex-grow-1 text-white active">FAQ</RouterLink>
                        </li>
                        <li class="d-flex align-items-center w-100 classif-impot-item active">
                            <RouterLink :to="{name: 'download-sommaire'}" class="flex-grow-1 text-white">Télécharger le sommaires de documents</RouterLink>
                        </li>

                        <li class="d-flex align-items-center w-100 classif-impot-item active">
                            <RouterLink :to="{
                                name: 'classifimpot', 
                                params: {classifimpot: 'impot-direct'}
                                }" class="flex-grow-1 text-white">
                                ClassifImpot
                            </RouterLink>
                        </li>
                        <li class="d-flex align-items-center w-100 classif-impot-item active">
                            <RouterLink :to="{
                                name: 'classifimpottype', 
                                params: {classifimpot: 'impot-direct', classifimpottype: 'isr'}
                                }" class="flex-grow-1 text-white">
                                ClassifImpotType
                            </RouterLink>
                        </li>
                        <li class="d-flex align-items-center w-100 classif-impot-item active">
                            <RouterLink :to="{
                                name: 'impot', 
                                params: {classifimpot: 'lorem', classifimpottype: 'lorem', impot: 'lorem'}
                                }" class="flex-grow-1 text-white">
                                Impot
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="copyright d-flex justify-content-between align-items-center gap-3 flex-wrap pb-3">
                <p class="text-start" style="line-height: normal;">Copyright © 2024, ImpotDoc, Developped by <a rel="nofollow" href="#" target="_blank"><u>aploon</u></a></p>
                <p style="line-height: normal;">
                    <RouterLink :to="{name: 'condition'}" class="text-white"><u>Termes et conditions</u></RouterLink> &
                    <RouterLink :to="{name: 'politique'}" class="text-white"><u>Politique de confidentialité</u></RouterLink>  
                </p>
            </div>
        </div>
    </footer>
</template>