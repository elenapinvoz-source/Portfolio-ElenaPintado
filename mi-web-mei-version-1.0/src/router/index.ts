import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/home/Home.vue";
import SobreMi from "@/pages/sobremi/sobremi.vue";
import Proyectos from "@/pages/proyectos/proyectos.vue";
import Contacto from "@/pages/contacto/contacto.vue";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/sobremi", name: "sobremi", component: SobreMi },
    { path: "/proyectos", name: "proyectos", component: Proyectos },
    { path: "/contacto", name: "contacto", component: Contacto },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
});
