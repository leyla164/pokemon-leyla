import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Tambah from "../views/Tambah.vue"


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Tambah",
        name: "Tambah",
        component: Tambah,
        meta: { requiresGuest: true ,}
    },
   
];

const router = createRouter({
    history: createWebHistory(),
    routes
});




export default router;