<template>

    <SearchComponent />

    <!-- Impot content -->
    <div class="impot-container container mt-5">
        <div class="row">
            <div class="classif-impot-container col-lg">
                <h5>Les Impots directs</h5>
                <ul class="d-flex flex-column align-items-center mt-3">
                    <li class="d-flex align-items-center w-100 classif-impot-item active">
                        <a href="#" class="fw-bold flex-grow-1 active">Impôts sur le revenu</a>
                    </li>
                    <li class="d-flex align-items-center w-100 classif-impot-item active">
                        <a href="#" class="fw-bold flex-grow-1">Taxes sur le patrimoine</a>
                    </li>
                    <li class="d-flex align-items-center w-100 classif-impot-item active">
                        <a href="#" class="fw-bold flex-grow-1">Autres types d'impots</a>
                    </li>
                </ul>
            </div>
            <div class="impot-container col-lg-8">
                <div class="impot-content">
                    <span style="font-size: 21px;">Impôts sur le revenu</span>
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
                                <tr>
                                    <td>Impôts sur les sociétés</td>
                                    <td>1</td>
                                    <td>5</td>
                                    <td>25% et 30%</td>
                                    <td><a href=""><u>Voir la note</u></a></td>
                                </tr>
                                <tr>
                                    <td>Impôts sur les bénéfices d'affaires</td>
                                    <td>2</td>
                                    <td>33</td>
                                    <td>12%</td>
                                    <td><a href=""><u>Voir la note</u></a></td>
                                </tr>
                                <tr>
                                    <td>Impôt sur le revenu des capitaux mobiliers</td>
                                    <td>3</td>
                                    <td>38</td>
                                    <td></td>
                                    <td><a href=""><u>Voir la note</u></a></td>
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
    import SearchComponent from '@/components/utils/search.vue';
</script>