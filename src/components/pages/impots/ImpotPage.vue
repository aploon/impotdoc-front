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
                    <li class="d-flex align-items-center w-100 classif-impot-item active">
                        <a href="#" class="fw-bold flex-grow-1">Article 1: Les bénefices réalisés</a>
                    </li>
                    <li class="d-flex align-items-center w-100 classif-impot-item active">
                        <a href="#" class="fw-bold flex-grow-1">Article 2: Personnes imposables</a>
                    </li>
                    <li class="d-flex align-items-center w-100 classif-impot-item active">
                        <a href="#" class="fw-bold flex-grow-1">Article 3: Exonération</a>
                    </li>
                </ul>
            </div>
            <div class="impot-container col-lg-8">
                <div class="impot-content">
                    <span style="font-size: 21px;">NOTE 1 : Impôt sur les sociétés</span>
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
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td class="text-center" style="border: solid 1px black !important">
                                        3
                                    </td>
                                    <td>
                                        3) Sur option, les personnes morales non expressément assujetties

                                        a) les sociétés en nom collectif et les groupements d’intérêt économique (GIE) ;

                                        b) les sociétés en participation ;

                                        c) les sociétés civiles.

                                        NB : L’option doit être formulée avant le 30 novembre, et s’exercer à compter du
                                        1er janvier de l’exercice suivant.
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td class="text-center" style="border: solid 1px black !important">
                                        4
                                    </td>
                                    <td>
                                        EXONERATIONS
                                        Sont exonérés de l’impôt sur les sociétés :
                                        … suite, confère CGI.
                                        9) les associations et organismes sans but lucratif légalement constitués et
                                        dont la gestion est désintéressée.
                                        13) les sociétés d’exploitation agricole, de pêche et d’élevage ;
                                        14) la caisse des dépôts et consignations du Bénin ainsi que toute filiale créée
                                        assurant une mission d’intérêt général.
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td class="text-center" style="border: solid 1px black !important">
                                        5
                                    </td>
                                    <td>
                                        TERRITORIALITE

                                        1) L’impôt sur les sociétés est dû à raison des bénéfices réalisés dans les
                                        entreprises exploitées

                                        en République du Bénin ainsi que de ceux dont l’imposition est attribuée au
                                        Bénin par une convention

                                        internationale visant l’élimination des doubles impositions.

                                        2) Sont réputées exploitées en République du Bénin :

                                        a) les sociétés et autres entités résidentes en République du Bénin,
                                        c’est-à-dire

                                        celles dont le siège social ou le lieu de direction effective est situé en
                                        République du Bénin ;

                                        b) les sociétés et autres entités non-résidentes disposant d’un ETS stable en
                                        République du Bénin.

                                        … suite, confère CGI.
                                    </td>
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
</script>

<style scoped>
th,
td {
    background-color: rgba(0, 0, 0, 0) !important;
    border-width: 0px !important;
}
</style>