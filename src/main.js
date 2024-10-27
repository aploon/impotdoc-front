import { createApp } from 'vue'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes
})

let historys = [];
// Scripts when the route is changed
router.afterEach(() => {
    // some code here
    historys.push({
        name: router.currentRoute.value.name,
        path: router.currentRoute.value.path,
    });

    app.config.globalProperties.$historys = historys;
});

const app = createApp(App)

app.use(router)

app.mount('#app')
