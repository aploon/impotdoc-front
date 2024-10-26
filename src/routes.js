import MainLayout from "./components/layouts/main-layout/MainLayout.vue";
import FaqPage from "./components/pages/FaqPage.vue";
import HomePage from "./components/pages/HomePage.vue";
import SearchPage from "./components/pages/SearchPage.vue";

export const routes = [
    { path: '/', component: MainLayout, children: [
        { path: '', name: "home", component: HomePage },
        { path: 'rechercher', name: "search", component: SearchPage },
        { path: 'faq', name: "faq", component: FaqPage },
    ] }
]