<template>

    <SearchComponent />

    <!-- Impot content -->
    <div class="impot-container container mt-5">
        <div class="row">
            <div class="classif-impot-container col-lg">
                <ul class="d-flex flex-column align-items-center mt-3">
                    <li class="d-flex align-items-center w-100 classif-impot-item active">
                        <a href="#" class="fw-bold flex-grow-1 active">Tous les articles</a>
                    </li>
                    <li v-for="article in articles" :key="article.id" class="d-flex align-items-center w-100 classif-impot-item active">
                        <a href="#" class="fw-bold flex-grow-1">Article {{ article.num }}: {{ article.titre }}</a>
                    </li>
                </ul>
            </div>
            <div class="impot-container col-lg-8">
                <div class="impot-content">
                    <span style="font-size: 21px;">NOTE {{ impot.note }} : {{ impot.designation }}</span>
                    <div class="table-responsive mt-3">
                        <table id="table_articles" class="table">
                            <thead>
                                <tr>
                                    <th class="max-w-[125px] text-center" style="border: solid 1px black !important">
                                        ARTICLE
                                    </th>
                                    <th class="min-w-[350px]"
                                        style="border: solid 1px black !important;">
                                        RESUME/COMMENTAIRES
                                    </th>
                                </tr>
                            </thead>
                            <tbody id="articles_content">
                                <template v-for="article in articles" :key="article.id">
                                    <tr>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center" style="border: solid 1px black !important">
                                            {{ article.num }}
                                        </td>
                                        <td v-html="article.contenu"></td>
                                    </tr>
                                </template>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import SearchComponent from '@/components/utils/Search.vue';
import { onBeforeMount, ref, watch } from 'vue';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';

// get routes param
const route = useRoute();
const router = useRouter();

// ref data
const impot = ref([]);
const articles = ref([]);

// fetch methods
const fetchImpot = async (params) => {
    try {  
        const res = await $.ajax({
            url: 'http://impotdoc.local/api/impot/index.php',
            method: 'POST',
            data: { action: 'fetch_impot', impot: params.impot },
            dataType: 'json',
        });

        if (res.success) {
            impot.value = res.data.impot;
            articles.value = res.data.articles;
        } else {
            if (res.code === 404) {
                // Classif impot not found and redirect to 404 page
                router.push({ name: 'not-found' });
            }
        }

    } catch (error) {
        console.error('Erreur lors de la requête:', error);
    }
};

// hooks
onBeforeMount(() => {
    fetchImpot(route.params);
});
onBeforeRouteUpdate((to, from, next) => {
    fetchImpot(to.params);
    next();
});
</script>

<style scoped>
th,
td {
    background-color: rgba(0, 0, 0, 0) !important;
    border-width: 0px !important;
}
</style>