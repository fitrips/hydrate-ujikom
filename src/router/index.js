import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import Pertanyaan from "../views/Pertanyaan.vue";
import Water from "../views/Water.vue";
import Profile from "../views/Profile.vue";
import Dashboard from "../views/Dashboard.vue";
import Pengingat from "../views/Pengingat.vue";
import ArticleDetail from "../views/ArticleDetail.vue";

const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {requireGuest: true},
    },
    {
        path: "/register",
        name: "Register",
        component: Register
        
    },
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/pertanyaan",
        name: "Pertanyaan",
        component: Pertanyaan
    },
    {
        path: "/water",
        name: "Water",
        component: Water
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/pengingat",
        name: "Pengingat",
        component: Pengingat
    },
    {
        path: "/detail-artikel/:articleId",
        name: "DetailArtikel",
        component: ArticleDetail,
        props: true,
    },


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;