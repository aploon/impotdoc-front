<template>
    <HeaderLayout />
    <RouterView />
    <FooterLayout />
    <Autocomplete />
</template>

<script setup>
import Autocomplete from '@/components/utils/Autocomplete.vue';
import allInit from '@/scripts/init-scripts/all-init';
import { onMounted } from 'vue';
import FooterLayout from './FooterLayout.vue';
import HeaderLayout from './HeaderLayout.vue';

onMounted(() => {

    // Init all plugin scripts when the page is loaded
    allInit($);

    // Init Autocomplete
    autoComplete();

});

const autoComplete = () => {
    const {
        autocomplete,
        getAlgoliaResults
    } = window['@algolia/autocomplete-js'];

    const searchClient = algoliasearch(
        'V1PX7KYJ9H',
        '37794dba24017d8b506a02633a075d62'
    );

    autocomplete({
        container: '#autocomplete',
        placeholder: 'Faites une recherche',
        openOnFocus: true,
        getSources({
            query
        }) {
            return [{
                sourceId: 'impotDoc',
                getItems() {
                    return getAlgoliaResults({
                        searchClient,
                        queries: [{
                            indexName: 'admin_impotdoc_index_php',
                            params: {
                                query,
                                hitsPerPage: 5,
                            },
                        },],
                    });
                },
                templates: {
                    item({
                        item,
                        components,
                        html
                    }) {
                        return html`<a class="d-flex align-items-center justify-content-between w-100" href="${item.url}">

                                <div class="aa-ItemContent">
                                    <div class="aa-ItemIcon aa-ItemIcon--alignTop w-10 h-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
                                            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
                                        </svg>
                                    </div>
                                    <div class="aa-ItemContentBody">
                                        <div class="aa-ItemContentTitle">
                                            ${components.Highlight({
                            hit: item,
                            attribute: 'title',
                        })}
                                        </div>
                                        <div class="aa-ItemContentDescription">
                                            ${components.Highlight({
                            hit: item,
                            attribute: 'content',
                        })}
                                        </div>
                                    </div>
                                </div>

                                <div class="aa-ItemActions">
                                    <button
                                        class="aa-ItemActionButton aa-DesktopOnly aa-ActiveOnly"
                                        type="button"
                                        title="Select">
                                        <svg
                                        viewBox="0 0 24 24"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        >
                                        <path
                                            d="M18.984 6.984h2.016v6h-15.188l3.609 3.609-1.406 1.406-6-6 6-6 1.406 1.406-3.609 3.609h13.172v-4.031z"
                                        />
                                        </svg>
                                    </button>
                                    <a href="${item.secondary_url}"
                                        class="aa-ItemActionButton !p-2"
                                        type="button"
                                        title="Aller à la page">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-index" viewBox="0 0 16 16">
                                            <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 1 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 0 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.035a.5.5 0 0 1-.416-.223l-1.433-2.15a1.5 1.5 0 0 1-.243-.666l-.345-3.105a.5.5 0 0 1 .399-.546L5 8.11V9a.5.5 0 0 0 1 0V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v5.34l-1.2.24a1.5 1.5 0 0 0-1.196 1.636l.345 3.106a2.5 2.5 0 0 0 .405 1.11l1.433 2.15A1.5 1.5 0 0 0 6.035 16h6.385a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025"/>
                                        </svg>
                                    </a>
                                </div>

                            </a>`;
                    },
                },
                // ...
            },];
        },
    });

    // when command ctrl + K open modal and focus on input autocomplete-0-input
    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.key === 'k') {
            event.preventDefault();
            $('#search_modal').modal('show');
            setTimeout(() => {
                document.getElementById('autocomplete-0-input').focus();
            }, 200);
        }
    });
}
</script>

<style>
.aa-Panel {
    z-index: 9999;
}
</style>