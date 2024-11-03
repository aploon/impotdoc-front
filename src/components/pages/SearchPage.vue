<template>

    <SearchComponent />
    
</template>

<script setup>
import SearchComponent from '@/components/utils/Search.vue';
import { onMounted } from 'vue';

onMounted(()=>{

    // handle search when click on input open modal
    document.getElementById('search_open_btn').addEventListener('click', function () {
        $('#search_modal').modal('show');
        setTimeout(() => {
            document.getElementById('autocomplete-0-input').focus();
        }, 200);
    });
})
</script>