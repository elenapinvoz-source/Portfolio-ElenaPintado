import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/home/Home.vue";
import SobreMi from "@/pages/sobremi/sobremi.vue";
import Proyectos from "@/pages/proyectos/proyectos.vue";
import ProyectosLayout from "@/pages/proyectos/ProyectosLayout.vue";
import Contacto from "@/pages/contacto/contacto.vue";
import ProyectoKaoka from "@/pages/proyectos/Kaoka.vue";
import ProyectoMindPop from "@/pages/proyectos/Mindpop.vue";
import ProyectoCrefad from "@/pages/proyectos/Crefad.vue";
import ProyectoComic from "@/pages/proyectos/Comic.vue";
import ProyectoLavejez from "@/pages/proyectos/Lavejez.vue";
import ProyectoLoquenosmueve from "@/pages/proyectos/Loquenosmueve.vue";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/sobremi", name: "sobremi", component: SobreMi },
    {
      path: "/proyectos",
      component: ProyectosLayout,
      children: [
        { path: "", name: "proyectos", component: Proyectos },
        { path: "Kaoka", name: "proyecto-kaoka", component: ProyectoKaoka },
        { path: "Mindpop", name: "proyecto-mind-pop", component: ProyectoMindPop },
        { path: "Crefad", name: "proyecto-crefad", component: ProyectoCrefad },
        { path: "Comic", name: "proyecto-comic", component: ProyectoComic },
        { path: "Lavejez", name: "proyecto-lavejez", component: ProyectoLavejez },
        { path: "Loquenosmueve", name: "proyecto-loquenosmueve", component: ProyectoLoquenosmueve },
      ],
    },
    { path: "/contacto", name: "contacto", component: Contacto },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
});
