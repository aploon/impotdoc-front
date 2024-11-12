<template>

    <SearchComponent />

    <!-- Impot content -->
    <div class="impot-container container mt-5">
        <div class="row">
            <div class="classif-impot-container col-lg">
                <ul class="d-flex flex-column align-items-center mt-3">
                    <li class="d-flex align-items-center w-100 classif-impot-item">
                        <a href="#" @click.prevent="fetchImpot(route.params)"
                            class="article-title article-title-active fw-bold flex-grow-1">Tous les articles</a>
                    </li>
                    <li v-for="article in articlesNames" :key="article.id"
                        class="d-flex align-items-center w-100 classif-impot-item">
                        <a href="#" @click.prevent="fetchArticle(article.id)" class="article-title fw-bold flex-grow-1"
                            :data-id="article.id">Article {{ article.num }}: {{ article.titre }}</a>
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
                                    <th class="min-w-[350px]" style="border: solid 1px black !important;">
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
import { nextTick, onBeforeMount, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// get routes param
const route = useRoute();
const router = useRouter();

// ref data
const impot = ref([]);
const articles = ref([]);
const articlesNames = ref([]);

// fetch methods
const fetchImpot = async (params) => {
    try {
        const res = await $.ajax({
            url: 'http://kubernetes.docker.internal/api/impot/index.php',
            method: 'POST',
            data: { action: 'fetch_impot', impot: params.impot },
            dataType: 'json',
        });

        if (res.success) {
            impot.value = res.data.impot;
            articles.value = res.data.articles;
            articlesNames.value = res.data.articles;

            await nextTick()

            activeArticle();
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
const fetchArticle = async (id) => {
    try {
        const res = await $.ajax({
            url: 'http://kubernetes.docker.internal/api/impot/index.php',
            method: 'POST',
            data: { action: 'fetch_article', id: id },
            dataType: 'json',
        });

        if (res.success) {
            articles.value = [res.data];
        }

    } catch (error) {
        console.error('Erreur lors de la requête:', error);
    }
};
const activeArticle = () => {
    // Active article title
    $('.article-title').on('click', function () {
        $('.article-title').removeClass('article-title-active');
        $(this).toggleClass('article-title-active');
    });
};

// hooks
onMounted(() => {
    // handle search when click on input open modal
    document.getElementById('search_open_btn').addEventListener('click', function () {
        $('#search_modal').modal('show');
        setTimeout(() => {
            document.getElementById('autocomplete-0-input').focus();
        }, 200);
    });
})
onBeforeMount(() => {
    // check if route patch as hash
    if (route.hash) {
        const hash = route.hash.replace('#', '');
        const articleId = parseInt(hash.replace('article', ''));
        fetchImpot(route.params);
        fetchArticle(articleId);

        setTimeout(()=>{
            // active article title
            $('.article-title').removeClass('article-title-active');
            $('a[data-id="' + articleId + '"]').toggleClass('article-title-active');
        }, 100);
    }else {
        fetchImpot(route.params);
    }
});
watch(route, (r) => {
    // check if route patch as hash
    if (route.hash) {
        const hash = route.hash.replace('#', '');
        const articleId = parseInt(hash.replace('article', ''));
        fetchArticle(articleId);

        setTimeout(()=>{
            // active article title
            $('.article-title').removeClass('article-title-active');
            $('a[data-id="' + articleId + '"]').toggleClass('article-title-active');
        }, 100);
    }else {
        fetchImpot(r.params);
    }
});

</script>

<style scoped>
th,
td {
    background-color: rgba(0, 0, 0, 0) !important;
    border-width: 0px !important;
}

.article-title-active {
    background-color: #e5eff0;
    color: #0a4d52;
}
</style>