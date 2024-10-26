import { createApp } from 'vue'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes
})

// Scripts when the route is changed
router.afterEach(() => {
    // some code here
});

const app = createApp(App)

app.use(router)

app.mount('#app')
