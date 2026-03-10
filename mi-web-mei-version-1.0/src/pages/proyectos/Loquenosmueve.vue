
<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ArrowLeft } from "lucide-vue-next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const youtubeVideoId = "zsKziSdCnTo";

// Definimos smallImages para que no de error el v-for de abajo
const smallImages: string[] = []; 

const largeImages = [
  "/imagenes/Proyectos/Loquenosmueve/Mockupcartel.png",
  "/imagenes/Proyectos/Loquenosmueve/carteles.gif",
  "/imagenes/Proyectos/Loquenosmueve/folleto.gif",
  "/imagenes/Proyectos/Loquenosmueve/mupis.gif",
  "/imagenes/Proyectos/Loquenosmueve/historias.jpg",
];

const heroTitle = "/imagenes/Proyectos/Loquenosmueve/LQNM.gif";
</script>

<template>
  <section class="bg-[#fff] px-[26px] pt-10 pb-[90px] text-[#111] max-[980px]:px-[18px] max-[980px]:pt-[26px] max-[980px]:pb-[56px]">
    <div class="mx-auto w-full max-w-[1042px]">
      
      <RouterLink to="/proyectos" class="inline-flex">
        <Button variant="ghost" size="icon" class="h-11 w-11 rounded-full border border-black/20 bg-transparent text-[#111] hover:bg-black/5">
          <ArrowLeft class="h-6 w-6" />
        </Button>
      </RouterLink>

      <div class="pt-8 pb-20 max-[980px]:pt-6 max-[980px]:pb-14">
        <img :src="heroTitle" alt="Lo que nos mueve" class="block w-full object-contain" />
      </div>

      <Card class="rounded-none border-0 bg-transparent shadow-none">
        <CardContent class="p-0">
          <h2 class="text-3xl font-semibold uppercase sm:text-5xl">LO QUE NOS MUEVE</h2>
          <div class="mt-5 grid gap-8 sm:grid-cols-[2fr_1fr]">
            <p class="max-w-[560px] text-sm leading-7">
              Es una campaña que une a jóvenes y mayores a través de sus pasiones. 
              En una sociedad cada vez más individualista, este proyecto utiliza la 
              ilustración sencilla y colores planos para romper prejuicios generacionales,
              creando una red de apoyo local donde lo que nos define no es la edad, sino 
              nuestros intereses compartidos. El objetivo es convertir los hobbies en un 
              puente para generar sinergias, demostrando que nunca es pronto ni tarde para 
              compartir lo que nos apasiona.
            </p>
            <div class="space-y-1 text-sm uppercase sm:justify-self-end">
              <p><span class="font-semibold">Año </span><span class="font-light">2026</span></p>
              <p class="font-semibold">CAMPAÑA TANSMEDIA</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div class="mt-20 overflow-hidden bg-black/5">
        <div class="relative h-0 w-full pb-[56.25%]">
          <iframe
            class="absolute left-0 top-0 h-full w-full border-0"
            :src="`https://www.youtube.com/embed/${youtubeVideoId}`"
            title="Video del proyecto"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div> <div class="mt-20 space-y-8">
        <Card v-for="image in largeImages" :key="image" class="overflow-hidden rounded-none border-0 bg-transparent shadow-none">
          <CardContent class="p-0">
            <img :src="image" alt="Mockup" class="block w-full object-cover" />
          </CardContent>
        </Card>
      </div>

      <div class="mt-12 grid gap-8 sm:grid-cols-2">
        <Card v-for="image in smallImages" :key="image" class="overflow-hidden rounded-none border-0 bg-transparent shadow-none">
          <CardContent class="p-0">
            <img :src="image" alt="Aplicación" class="block h-full w-full object-cover" />
          </CardContent>
        </Card>
      </div>

      <Card class="mt-20 rounded-none border-0 bg-transparent shadow-none">
        <CardContent class="grid items-start gap-x-10 gap-y-4 p-0 sm:grid-cols-[auto_1fr]">
          <h3 class="text-[2rem] font-semibold uppercase leading-none">Créditos equipo:</h3>
          <div class="space-y-1 text-sm uppercase leading-tight">
            <p>Alba Cardona</p>
            <p>Irene Vidal</p>
            <p>Mar Albiol</p>
            <p>Sandra Pérez</p>
            <p>Amanda Saltó</p>
            <p>Elena Pintado</p>
          </div>
        </CardContent>
      </Card>

    </div> </section>
</template>

<style scoped>
.crefad-hero {
  min-height: 42vh;
}

.crefad-poster {
  aspect-ratio: 16 / 10;
}

.crefad-object {
  aspect-ratio: 4 / 5;
}
</style>



