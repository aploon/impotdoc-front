<template>

    <SearchComponent />

    <div class="container mt-5">
        <h1 class="text-center">Questions fréquemment posées</h1>

        <div class="accordion accordion-container mt-3 m-auto" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Quels sont les différents types d'impôts en vigueur dans mon pays et comment sont-ils 
                        définis dans la législation ?
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample" style="">
                    <div class="accordion-body">
                        <strong>Les différents types d’impôts</strong> sont généralement répartis entre impôts directs et indirects. 
                        L'impôt sur le revenu, par exemple, est un impôt direct prélevé sur les particuliers en fonction de leurs revenus. 
                        La TVA est un impôt indirect appliqué aux biens et services consommés. Chaque type d'impôt est défini par des articles 
                        spécifiques dans le code des impôts, 
                        détaillant leur base imposable, les taux et les modalités de paiement.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Quels articles de loi régissent chaque type d'impôt, et quelles sont les principales 
                        dispositions qu'ils contiennent ? 
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>Les articles de loi régissant chaque impôt</strong> précisent les principes de calcul, 
                        les modalités de déclaration, et les sanctions en cas de non-respect. Par exemple, les articles 
                        relatifs à l'impôt sur le revenu peuvent définir les taux progressifs, les abattements et les crédits d'impôt disponibles. 
                        Les articles concernant la TVA indiqueront les taux standards et réduits applicables.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Quelle est la différence entre les impôts directs et indirects, et comment la législation 
                        les aborde-t-elle ?
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>Les impôts directs</strong> (comme l'impôt sur le revenu) sont prélevés directement sur les revenus ou 
                        le patrimoine des contribuables, tandis que les impôts indirects (comme la TVA) sont appliqués sur les biens et services. 
                        La législation fiscale regroupe souvent ces deux catégories dans des sections distinctes, chaque type ayant ses propres 
                        articles définissant 
                        les règles de calcul, d'exonération et de recouvrement.
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
    @media (min-width: 576px) {
        .accordion-container{
            max-width: 440px;
        }
    }

    @media (min-width: 768px) {
        .accordion-container{
            max-width: 620px;
        }
    }
    
    @media (min-width: 992px) {
        .accordion-container {
            max-width: 860px;
        }
    }

    @media (min-width: 1200px) {
        .accordion-container {
            max-width: 1040px;
        }
    }

    @media (min-width: 1400px) {
        .accordion-container {
            max-width: 1220px;
        }
    }

    

    
</style>