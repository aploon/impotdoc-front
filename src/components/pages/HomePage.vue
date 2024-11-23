<template>

    <SearchComponent />

    <!-- Container -->
    <div class="container pt-5" style="height: 850px;">
        <div id="sommaire_preloader" class="container position-absolute w-100 d-flex justify-content-center" 
            style="height: 850px; background-color: #dddddd; padding-top: 125px;">
            <div class="preloader-inner">
            <span class="dot"></span>
            <div class="dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
            </div>
        </div>
        <iframe src="https://view.officeapps.live.com/op/embed.aspx?src=https://elyonsas.com/impotdocument.xlsx" style="width: 100%; height: 100%;">
        </iframe>
    </div>
    <!-- End of Container -->
</template>

<script setup>
import SearchComponent from '@/components/utils/Search.vue';
import { onMounted } from 'vue';

onMounted(()=>{

    // Home Preloader
    setTimeout(()=>{
        $('#sommaire_preloader').removeClass('d-flex')
        $('#sommaire_preloader').addClass('d-none')
    }, 5000)

    // handle search when click on input open modal
    document.getElementById('search_open_btn').addEventListener('click', function () {
        $('#search_modal').modal('show');
        setTimeout(() => {
            document.getElementById('autocomplete-0-input').focus();
        }, 200);
    });
})
</script>