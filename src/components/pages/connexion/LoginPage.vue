<template>

    <Layout>
        <div id="main-wrapper" class="auth-customizer-none mt-5">
            <div
                class="position-relative overflow-hidden radial-gradient w-100 d-flex flex-column gap-4 align-items-center justify-content-center">
                <h2 class="text-primary text-decoration-underline">Se connecter</h2>
                <div class="d-flex align-items-center justify-content-center w-100">
                    <div class="row justify-content-center w-100">
                        <div class="col-md-8 col-lg-6 col-xxl-3 auth-card">
                            <div class="card mb-0">
                                <div class="card-body p-5">
                                    <a href="../main/index.html"
                                        class="text-nowrap logo-img text-center d-block mb-5 w-100 bg-primary py-2">
                                        <img src="/assets/images/logo.png" class="dark-logo"
                                            style="height: 50px; width: auto !important;" alt="Logo-Dark">
                                        <img src="/assets/images/logo.png" class="light-logo"
                                            style="height: 50px; width: auto !important; display: none;"
                                            alt="Logo-light">
                                    </a>
                                    <!-- <div class="row">
                                        <div class="col-6 mb-2 mb-sm-0">
                                            <a class="btn text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8"
                                                href="javascript:void(0)" role="button">
                                                <img src="/assets/images/svgs/google-icon.svg" alt="modernize-img"
                                                    class="me-2" style="width: auto !important;" width="18" height="18">
                                                <span class="flex-shrink-0">with Google</span>
                                            </a>
                                        </div>
                                        <div class="col-6">
                                            <a class="btn text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8"
                                                href="javascript:void(0)" role="button">
                                                <img src="/assets/images/svgs/facebook-icon.svg" alt="modernize-img"
                                                    class="me-2" style="width: auto !important;" width="18" height="18">
                                                <span class="flex-shrink-0">with FB</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="position-relative text-center my-4">
                                        <p
                                            class="mb-0 fs-4 px-3 d-inline-block bg-body text-dark z-index-5 position-relative">
                                            or sign in with
                                        </p>
                                        <span
                                            class="border-top w-100 position-absolute top-50 start-50 translate-middle"></span>
                                    </div> -->
                                    <form>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Nom d'utilisateur ou
                                                Email</label>
                                            <input type="text" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp">
                                        </div>
                                        <div class="mb-4">
                                            <label for="exampleInputPassword1" class="form-label">Mot de passe</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1">
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between flex-wrap mb-4">
                                            <div class="form-check">
                                                <input class="form-check-input primary" type="checkbox" value=""
                                                    id="flexCheckChecked" checked="">
                                                <label class="form-check-label text-dark" for="flexCheckChecked">
                                                    Se souvenir de moi !
                                                </label>
                                            </div>
                                            <RouterLink class="text-primary fw-medium"
                                                :to="{name: 'forget-password'}">Mot de passe oublié
                                                ?</RouterLink>
                                        </div>
                                        <button class="btn btn-primary w-100 py-8 mb-4 rounded-2">Se connecter</button>
                                        <div class="d-flex align-items-center justify-content-center flex-wrap">
                                            <span class="mb-0 fw-medium">Vous n'avez pas de compte ?</span>
                                            <RouterLink class="text-primary fw-medium ms-2"
                                                :to="{name: 'signup'}">Créer un compte</RouterLink>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>

</template>

<script setup>
import Layout from '@/components/layouts/connexion/Layout.vue';
</script>