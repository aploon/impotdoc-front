import { createApp } from 'vue'
import App from './App.vue'
import { routes } from './routes.js'
import InstantSearch from 'vue-instantsearch/vue3/es';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes
})

let historys = [];
// Scripts when the route is changed
router.afterEach(() => {
    // Add route to history
    historys.push({
        name: router.currentRoute.value.name,
        path: router.currentRoute.value.path,
    });

    app.config.globalProperties.$historys = historys;
});

const app = createApp(App)

app.use(router)
app.use(InstantSearch)

app.mount('#app')
