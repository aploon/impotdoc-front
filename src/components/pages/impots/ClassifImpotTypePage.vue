<template>

    <SearchComponent />

    <!-- Impot content -->
    <div class="impot-container container mt-5">
        <div class="row">
            <div class="classif-impot-container col-lg">
                <h5>{{ classifImpot.nom }}</h5>
                <ul class="d-flex flex-column align-items-center mt-3">
                    <li v-for="classifImpotType in classifImpotTypes" :key="classifImpotType.id" class="d-flex align-items-center w-100 classif-impot-item active">
                        <RouterLink :to="{
                            name: 'classifimpottype',
                            params: { classifimpot: allParams.classifimpot, classifimpottype: classifImpotType.code.toLowerCase() }
                        }" class="fw-bold flex-grow-1">{{ classifImpotType.nom }}</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="impot-container col-lg-9">
                <div class="impot-content">
                    <span style="font-size: 21px;">{{ classifImpotType.nom }}</span>
                    <div class="table-responsive">
                        <table class="table mt-3">
                            <thead class="table-light">
                                <tr>
                                    <th scope="col" style="min-width: 150px;">Désignation</th>
                                    <th scope="col">Note</th>
                                    <th scope="col">Page CGI</th>
                                    <th scope="col">Taux</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="impot in impots" :key="impot.id">
                                    <td>{{ impot.designation }}</td>
                                    <td>{{ impot.note }}</td>
                                    <td>{{ impot.page_cgi }}</td>
                                    <td>{{ impot.taux }}</td>
                                    <td><RouterLink :to="{
                                        name: 'impot',
                                        params: { 
                                            classifimpot: allParams.classifimpot, 
                                            classifimpottype: allParams.classifimpottype, 
                                            impot: impot.code 
                                        }
                                    }"><u>Voir la note</u></RouterLink></td>
                                </tr>
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
import { onBeforeMount, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// get routes param
const route = useRoute();
const router = useRouter();

// ref data
const classifImpot = ref([]);
const classifImpotType = ref([]);
const impots = ref([]);
const allParams = ref([]);
const classifImpotTypes = ref([]);

// fetch methods
const fetchImpots = async (params) => {
    try {  
        const res = await $.ajax({
            url: 'http://impotdoc.local/api/classif-impot-type/index.php',
            method: 'POST',
            data: { action: 'fetch_impots', classifimpot: params.classifimpot, classifimpottype: params.classifimpottype },
            dataType: 'json',
        });

        if (res.success) {
            classifImpot.value = res.classifImpot;
            classifImpotType.value = res.classifImpotType;
            impots.value = res.data;
            allParams.value = res.allParams;
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
const fetchClassifImpotTypes = async (params) => {
    try {
        const res = await $.ajax({
            url: 'http://impotdoc.local/api/classif-impot-type/index.php',
            method: 'POST',
            data: { action: 'fetch_classif_impot_types', classifimpot: params.classifimpot },
            dataType: 'json',
        });

        if (res.success) {
            classifImpotTypes.value = res.data;
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
    fetchImpots(route.params);
    fetchClassifImpotTypes(route.params);
});

watch(route, (r) => {
    fetchImpots(r.params);
    fetchClassifImpotTypes(r.params);
});

</script>