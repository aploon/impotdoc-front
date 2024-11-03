import MainLayout from "./components/layouts/main-layout/MainLayout.vue";
import FaqPage from "./components/pages/FaqPage.vue";
import HomePage from "./components/pages/HomePage.vue";
import SearchPage from "./components/pages/SearchPage.vue";
import LoginPage from "./components/pages/connexion/LoginPage.vue";
import SignUpPage from "./components/pages/connexion/SignUpPage.vue";
import ClassifImpotTypePage from "./components/pages/impots/ClassifImpotTypePage.vue";
import ImpotPage from "./components/pages/impots/ImpotPage.vue";

// Create empty components
const ForgetPasswordPage = { template: '<div>Forget Password Page</div>' }
const LoiFinancePage = { template: '<div>Loi Finance Page</div>' }
const CodeGeneralPage = { template: '<div>Code General Page</div>' }
const DirectionImpotPage = { template: '<div>Direction Impot Page</div>' }
const DownloadSommairePage = { template: '<div>Download Sommaire Page</div>' }
const ConditionPage = { template: '<div>Condition Page</div>' }
const PolitiquePage = { template: '<div>Politique Page</div>' }
const NotFoundPage = { template: '<div>Not Found Page</div>' }

export const routes = [
    // Mains routes
    { path: '/', component: MainLayout, children: [
        { path: '', name: "home", component: HomePage },
        { path: 'rechercher', name: "search", component: SearchPage },
        { path: 'faq', name: "faq", component: FaqPage },

        // Auth routes
        { path: 'forget-password', name: "forget-password", component: ForgetPasswordPage },

        //  Others routes
        { path: 'loi-finance', name: "loi-finance", component: LoiFinancePage },
        { path: 'code-general', name: "code-general", component: CodeGeneralPage },
        { path: 'direction-impot', name: "direction-impot", component: DirectionImpotPage },
        { path: 'download-sommaire', name: "download-sommaire", component: DownloadSommairePage },
        { path: 'condition', name: "condition", component: ConditionPage },
        { path: 'politique', name: "politique", component: PolitiquePage },

        // Impots routes
        { path: '/s/:classifimpot', name: "classifimpot", component: ClassifImpotTypePage },
        { path: '/s/:classifimpot/:classifimpottype', name: "classifimpottype", component: ClassifImpotTypePage },
        { path: '/s/:classifimpot/:classifimpottype/:impot', name: "impot", component: ImpotPage },
    ] },

    // Auth routes
    { path: '/login', name: "login", component: LoginPage },
    { path: '/signup', name: "signup", component: SignUpPage },

    // Not found route  
    { path: '/:pathMatch(.*)*', name: "not-found", component: NotFoundPage },
    
]