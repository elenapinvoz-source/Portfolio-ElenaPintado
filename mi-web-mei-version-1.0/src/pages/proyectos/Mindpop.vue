

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ArrowLeft } from "lucide-vue-next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const largeImages = [
  "/imagenes/Proyectos/Mindpop/tablero.png",
  "/imagenes/Proyectos/Mindpop/cartas.jpg",
  "/imagenes/Proyectos/Mindpop/tablerodetalle.jpg",
  "/imagenes/Proyectos/Mindpop/cartasdetalle.jpg",
  "/imagenes/Proyectos/Mindpop/mupi.jpg",
];

const heroTitle = "/imagenes/Proyectos/Mindpop/titulo.png";
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
          <h2 class="text-3xl font-semibold uppercase sm:text-5xl">MIND POP</h2>
          <div class="mt-5 grid gap-8 sm:grid-cols-[2fr_1fr]">
            <p class="max-w-[560px] text-sm leading-7">
              Mind Pop nace de una metáfora visual: ese instante en el que algo hace "pop" 
              en tu cabeza y logras el desbloqueo emocional necesario para avanzar. El proyecto 
              consiste en el diseño integral de un juego de mesa que transforma el autocuidado en 
              una experiencia amena, dinámica y cargada de humor. A través de retos, mímica y 
              autorreflexión, el juego invita a los usuarios a ejercitar la empatía y la conexión 
              con uno mismo y con los demás. Hemos realizado desde la conceptualización y el 
              branding hasta la ilustración, el diseño de packaging y la dirección de arte 
              fotográfica.
            </p>
            <div class="space-y-1 text-sm uppercase sm:justify-self-end">
              <p><span class="font-semibold">Año </span><span class="font-light">2025</span></p>
              <p>
                <span class="font-semibold">BRANDING</span>
              </p>
              <p>
                <span class="font-semibold">PACKAGING</span>
              </p>
              <p>
                <span class="font-semibold">DIRECCIÓN DE ARTE</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    <div class="mt-20 space-y-8">
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
            <p>Aitana García</p>
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






