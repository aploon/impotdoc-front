<template>
    <!-- Search container -->
    <div class="search-container w-100 d-flex justify-content-center align-items-center">
        <div class="search-content w-100">
            <form action="" class="search-form col-10 col-lg-6 m-auto" style="max-width: 750px !important;">
                <div class="input-group">
                    <input type="text" class="form-control px-3" 
                        style="font-size: 16px !important; padding-top: 11px; padding-bottom: 11px;" 
                        placeholder="Faire une recherche">
                    <div class="input-group-prepend">
                        <button class="input-group-text h-100 px-3" id="btnGroupAddon"
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
</template>