
<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ArrowLeft } from "lucide-vue-next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const smallImages = [
  "/imagenes/Proyectos/vejez/manodentro.jpg",
  "/imagenes/Proyectos/vejez/ombligo.jpg",
  "/imagenes/Proyectos/vejez/brazo.jpg",
  "/imagenes/Proyectos/vejez/manofuera.jpg",
  "/imagenes/Proyectos/vejez/frente.jpg",
  "/imagenes/Proyectos/vejez/cuello.jpg",
];

const heroTitle = "/imagenes/Proyectos/vejez/arriba.jpg";
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
          <h2 class="text-3xl font-semibold uppercase sm:text-5xl">SURCOS</h2>

          <div class="mt-5 grid gap-8 sm:grid-cols-[2fr_1fr]">
            <p class="max-w-[560px] text-sm leading-7">
              Surcos es un proyecto de fotografía de autor que nace de la angustia frente al paso 
              del tiempo; ese ciclo que corre sin esperarnos y que a menudo nos invisibiliza. En una
              sociedad donde la belleza se asocia exclusivamente a la juventud, este trabajo busca 
              reivindicar la etapa final de la vida como una parte esencial de nuestra identidad. 
              A través de la macrofotografía, el proyecto abstrae la piel de su contexto, 
              transformando cada arruga en un paisaje protagonista. Hemos optado por el blanco y negro 
              con el objetivo de desvincular las texturas de la identidad personal de cada sujeto. 
              Al eliminar el color, dejamos de retratar "a alguien" para centrar la mirada 
              exclusivamente en el concepto: los surcos como testimonios físicos del tiempo.
              En un mundo que huye de la madurez, Surcos celebra la honestidad de la piel, convirtiendo
               los relieves y peculiaridades en un mapa de memorias que merece ser observado.
            </p>

            <div class="space-y-1 text-sm uppercase sm:justify-self-end">
              <p>
                <span class="font-semibold">Año </span>
                <span class="font-light">2024</span>
              </p>
              <p class="font-semibold">FOTOGRAFÍA DE AUTOR</p>
            </div>
          </div>
        </CardContent>
      </Card>

     
      <div class="mt-12 space-y-8 grid gap-8 sm:grid-cols-2">
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
