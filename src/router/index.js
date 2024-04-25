import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import Pertanyaan from "../views/Pertanyaan.vue";
import Profile from "../views/Profile.vue";
import Dashboard from "../views/Dashboard.vue";
import ArticleDetail from "../views/ArticleDetail.vue";

// Fungsi untuk memeriksa apakah pengguna sudah login
const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    return !!token; 
};

// Fungsi guard untuk memeriksa apakah pengguna sudah login sebelum masuk ke halaman
const requireAuth = (to, from, next) => {
    if (!isLoggedIn()) {
        next({ name: "Login" });
    } else {
        next();
    }
};

// Fungsi guard untuk memeriksa apakah pengguna belum login sebelum masuk ke halaman login
const requireGuest = (to, from, next) => {
    if (isLoggedIn()) {
        next({ name: "Home" });
    } else {
        next();
    }
};

const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,

    },
    {
        path: "/register",
        name: "Register",
        component: Register,

    },
    {
        path: "/",
        name: "Home",
        component: Home,
        beforeEnter: requireAuth, // Pengguna harus login untuk mengakses halaman home
    },
    {
        path: "/pertanyaan",
        name: "Pertanyaan",
        component: Pertanyaan,
        beforeEnter: requireAuth, // Pengguna harus login untuk mengakses halaman pertanyaan
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        beforeEnter: requireAuth, // Pengguna harus login untuk mengakses halaman profile
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        beforeEnter: requireAuth, // Pengguna harus login untuk mengakses halaman dashboard
    },
    {
        path: "/detail-artikel/:articleId",
        name: "DetailArtikel",
        component: ArticleDetail,
        props: true,
        beforeEnter: requireAuth, // Pengguna harus login untuk mengakses halaman detail artikel
    },
    // Halaman tidak ditemukan
    {
        path: "/:catchAll(.*)",
        redirect: "/",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
