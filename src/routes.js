import MainLayout from "./components/layouts/main-layout/MainLayout.vue";
import HomePage from "./components/pages/HomePage.vue";

export const routes = [
    { path: '/', component: MainLayout, children: [
        { path: '', component: HomePage }
    ] }
]