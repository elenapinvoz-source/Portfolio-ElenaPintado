<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ArrowLeft } from "lucide-vue-next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const videoSrc = "/imagenes/Proyectos/Crefad/Animación.mp4";

const largeImages = [
  "/imagenes/Proyectos/Crefad/mockup.jpg",
];

const smallImages = [
  "/imagenes/Proyectos/Crefad/libreta.jpg",
  "/imagenes/Proyectos/Crefad/Cantimplora.jpg",
];

const heroTitle = "/imagenes/Proyectos/Crefad/logos.gif";
</script>

<template>
  <section
    class="bg-[#fff] px-[26px] pt-10 pb-[90px] text-[#111] max-[980px]:px-[18px] max-[980px]:pt-[26px] max-[980px]:pb-[56px]"
  >
    <div class="mx-auto w-full max-w-[1042px]">
      <RouterLink to="/proyectos" class="inline-flex">
        <Button
          variant="ghost"
          size="icon"
          class="h-11 w-11 rounded-full border border-black/20 bg-transparent text-[#111] hover:bg-black/5"
        >
          <ArrowLeft class="h-6 w-6" />
        </Button>
      </RouterLink>

      <div class="pt-8 pb-20 max-[980px]:pt-6 max-[980px]:pb-14">
        <img
          :src="heroTitle"
          alt="Crefad 2026"
          class="block w-full object-contain"
        />
      </div>

      <Card class="rounded-none border-0 bg-transparent shadow-none">
        <CardContent class="p-0">
          <h2 class="text-3xl font-semibold uppercase sm:text-5xl">CREFAD</h2>

          <div class="mt-5 grid gap-8 sm:grid-cols-[2fr_1fr]">
            <p class="max-w-[560px] text-sm leading-7">
              Identidad Visual y Comunicación para el Congreso Iberoamericano de
              Creación y Fabricación Digital. Desarrollo de la imagen gráfica,
              incluyendo el diseño de logotipo y cartelería promocional para un
              evento internacional de vanguardia tecnológica.
            </p>

            <div class="space-y-1 text-sm uppercase sm:justify-self-end">
              <p>
                <span class="font-semibold">Año </span>
                <span class="font-light">2026</span>
              </p>
              <p class="font-semibold">Identidad visual</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div class="mt-20 space-y-8">
        <Card class="overflow-hidden rounded-none border-0 bg-transparent shadow-none">
          <CardContent class="p-0">
            <video
              :src="videoSrc"
              class="block w-full"
              autoplay
              muted
              loop
              playsinline
              controls
            />
          </CardContent>
        </Card>

        <Card
          v-for="image in largeImages"
          :key="image"
          class="overflow-hidden rounded-none border-0 bg-transparent shadow-none"
        >
          <CardContent class="p-0">
            <img
              :src="image"
              alt="Mockup Crefad"
              class="block w-full object-cover"
            />
          </CardContent>
        </Card>
      </div>

      <div class="mt-12 grid gap-8 sm:grid-cols-2">
        <Card
          v-for="image in smallImages"
          :key="image"
          class="overflow-hidden rounded-none border-0 bg-transparent shadow-none"
        >
          <CardContent class="p-0">
            <img
              :src="image"
              alt="Aplicaciones Crefad"
              class="block h-full w-full object-cover"
            />
          </CardContent>
        </Card>
      </div>

     <Card class="mt-20 rounded-none border-0 bg-transparent shadow-none">
      <CardContent class="grid items-start gap-x-10 gap-y-4 p-0 sm:grid-cols-[auto_1fr]">
        <h3 class="text-[2rem] font-semibold uppercase leading-none">
          Créditos equipo:
        </h3>

        <div class="space-y-1 text-sm uppercase leading-tight">
          <p>Alba Cardona</p>
          <p>Cristina Cervera</p>
          <p>Elena Pintado</p>
        </div>
      </CardContent>
    </Card>

    </div>
  </section>
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
