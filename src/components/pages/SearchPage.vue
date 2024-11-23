<template>

    <!-- Search container -->
    <div class="search-container w-100 d-flex justify-content-center align-items-center">
        <div class="search-content w-100">
            <form action="" class="search-form col-10 col-lg-6 m-auto" style="max-width: 750px !important;">
                <div class="input-group" style="cursor: pointer;">
                    <!-- <input id="searchbox" type="text" class="form-control px-3" 
                        style="font-size: 16px !important; padding-top: 11px; padding-bottom: 11px;" 
                        placeholder="Faire une recherche"> -->
                    <div id="searchbox"></div>
                    <div class="input-group-prepend">
                        <button type="button" class="input-group-text h-100 px-3" id="btnGroupAddon"
                            style="background-color: rgb(240, 169, 69); border-top-left-radius: 0; border-bottom-left-radius: 0;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                                class="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div class="container">
        <div class="search-panel">
            <div class="search-panel__results w-100">
                <div id="hits"></div>
                <div id="pagination"></div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { nextTick, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
    'V1PX7KYJ9H',
    '37794dba24017d8b506a02633a075d62'
);

const search = instantsearch({
    indexName: 'front_impotdoc_index_php',
    searchClient,
    future: { preserveSharedStateOnUnmount: true },
});

const router = useRouter();

// hooks
onMounted(() => {

    // start search
    search.addWidgets([
        instantsearch.widgets.searchBox({
            container: '#searchbox',
        }),
        instantsearch.widgets.hits({
            container: '#hits',
            templates: {
                item: (hit, { html, components }) => html`
                <article class="d-flex flex-column w-100">
                    <div class="d-flex justify-content-between">
                        <a href="${hit.url}" class="instantsearch-url flex-grow-1">
                            <div>
                                <h3>${components.Highlight({ hit, attribute: 'title' })}</h3>
                                <p class="search-content">${components.Highlight({ hit, attribute: 'content' })}</p>
                            </div>
                        </a>
                        <a href="${hit.secondary_url}" class="instantsearch-url instantsearch-url-plus d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                            </svg>
                        </a>
                    </div>
                    <div class="d-flex">
                        <span class="d-flex align-items-center w-100">
                            <a href="${hit.classifimpoturl}" class="instantsearch-url instantsearch-url-plus">${hit.classifimpot}</a>
                            <span class="px-2"> > </span>
                            <a href="${hit.classifimpottypeurl}" class="instantsearch-url instantsearch-url-plus instantsearch-url-plus-last">${hit.classifimpottype}</a>
                        </span>
                    </div>
                </article>
                `,
            },
        }),
        instantsearch.widgets.configure({
            hitsPerPage: 8,
        }),
        instantsearch.widgets.pagination({
            container: '#pagination',
        }),
    ]);
    search.start();

    // when search is ready
    search.on('render', async () => {        
        // when click on instantsearch-url
        await nextTick();
        $('.instantsearch-url').on('click', function(e) {
            e.preventDefault();
            const targetRoute = $(this).attr('href');
            router.push(targetRoute);
        });
    });

    // Change input in search box
    $('#searchbox input')
        .removeClass('ais-SearchBox-input')
        .addClass('form-control px-3').attr('placeholder', 'Faire une recherche');

})
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    min-height: 50px;
    padding: 0.5rem 1rem;
    background-image: linear-gradient(284deg, #fedd4e, #fcb43a);
    color: #fff;
    margin-bottom: 1rem;
}

.header a {
    color: #fff;
    text-decoration: none;
}

.header-title {
    font-size: 1.2rem;
    font-weight: normal;
}

.header-title::after {
    content: ' ▸ ';
    padding: 0 0.5rem;
}

.header-subtitle {
    font-size: 1.2rem;
}

.container {
    max-width: 750px;
    margin: 0 auto;
    padding: 1rem;
}

#searchbox {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    min-width: 0;
}

.search-panel {
    display: flex;
}

.search-panel__filters {
    flex: 1;
}

.search-panel__results {
    flex: 3;
}

.ais-Highlight-highlighted {
    color: inherit;
    font-size: inherit;
}

#pagination {
    margin: 2rem auto;
    text-align: center;
}

.ais-Hits-item article {
    display: flex;
}

.ais-Hits-item img {
    max-height: 125px;
    padding-right: 16px;
}
</style>
<style>
#searchbox .ais-SearchBox-form::before {
    content: none !important;
}
#searchbox input {
    font-size: 16px !important;
    padding-top: 11px;
    padding-bottom: 11px;
    border-radius: 0px !important;
    border-radius: .375rem 0px 0px .375rem !important;
}
#searchbox form {
    height: auto !important;
    border-radius: .375rem 0px 0px .375rem !important;
}
#pagination .ais-Pagination-list{
    flex-wrap: wrap;
}
#hits .search-content {
    max-height: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    box-orient: vertical;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}
#hits .instantsearch-url-plus:hover {
    text-decoration: underline !important;
}
#hits .instantsearch-url-plus {
    white-space: nowrap;
}
#hits .instantsearch-url-plus-last {
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>