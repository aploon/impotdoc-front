<template>

    <SearchComponent />

    <ais-instant-search index-name="front_impotdoc_index_php" :search-client="searchClient">
        <!-- Widgets -->
    </ais-instant-search>

</template>

<script setup>
import SearchComponent from '@/components/utils/Search.vue';
import { onMounted, ref } from 'vue';

// ref
const searchClient = ref(
    algoliasearch('V1PX7KYJ9H', '37794dba24017d8b506a02633a075d62')
)

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
</script>