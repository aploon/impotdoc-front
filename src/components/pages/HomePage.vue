<template>

    <!-- Search container -->
    <div class="search-container w-100 d-flex justify-content-center align-items-center">
        <div class="search-content w-100">
            <form action="" class="search-form col-10 col-lg-6 m-auto">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Faire une recherche">
                    <div class="input-group-prepend">
                        <button class="input-group-text h-100" id="btnGroupAddon"
                            style="background-color: rgb(240, 169, 69); border-top-left-radius: 0; border-bottom-left-radius: 0;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>

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
</script>