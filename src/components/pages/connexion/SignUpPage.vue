<template>

    <Layout>
        <div id="main-wrapper" class="auth-customizer-none mt-5">
            <div
                class="position-relative overflow-hidden radial-gradient w-100 d-flex flex-column gap-4 align-items-center justify-content-center">
                <h2 class="text-primary text-decoration-underline">Créer un compte</h2>
                <div class="d-flex align-items-center justify-content-center w-100">
                    <div class="row justify-content-center w-100">
                        <div style="max-width: 600px !important;" class="col-md-8 auth-card">
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
                                            <label for="username" class="form-label">Nom d'utilisateur</label>
                                            <input type="text" v-model="formData.username" class="form-control" id="username"
                                                aria-describedby="emailHelp">
                                        </div>
                                        <div class="mb-4">
                                            <label for="email" class="form-label">Email</label>
                                            <input type="email" v-model="formData.email" class="form-control" id="email"
                                                aria-describedby="emailHelp">
                                        </div>
                                        <div class="mb-4">
                                            <label for="password" class="form-label">Mot de passe</label>
                                            <input type="password" v-model="formData.password" class="form-control" id="password">
                                        </div>
                                        <button id="signup_btn" @click.prevent="signup" class="btn btn-primary w-100 py-8 mb-4 rounded-2">Créer un
                                            compte</button>
                                        <div class="d-flex align-items-center justify-content-center flex-wrap">
                                            <span class="mb-0 fw-medium">Vous avez déjà un compte ?</span>
                                            <RouterLink class="text-primary fw-medium ms-2" :to="{ name: 'login' }">
                                                Connecter-vous !</RouterLink>
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
import { ref } from 'vue';

// ref data
const formData = ref({username: '', email: '', password: ''});

// fetch methods
const signup = async () => {
    const data = formData.value
    $('#signup_btn').text('Inscription...')
    try {  
        const res = await $.ajax({
            url: 'http://impotdoc.local/api/login/signup.php',
            method: 'POST',
            data: { username: data.username, email: data.email, password: data.password },
            dataType: 'json',
        });

        if (res.success) {
            // stock in session and redirect
            console.log(res)
        }else {
            console.log(res)
        }

    } catch (error) {
        console.error("Un erreur s'est produite : ", error);
    }
    $('#signup_btn').text('Créer un compte')

}
</script>