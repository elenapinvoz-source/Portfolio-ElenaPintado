
<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ArrowLeft } from "lucide-vue-next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const largeImages = [
  "/imagenes/Proyectos/Comic/portada.jpg",
  "/imagenes/Proyectos/Comic/guardas.jpg",
  "/imagenes/Proyectos/Comic/doblepagina.jpg",
  "/imagenes/Proyectos/Comic/pagina.jpg",
];

const heroTitle = "/imagenes/Proyectos/Comic/portadaabierta.jpg";
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
          <h2 class="text-3xl font-semibold uppercase sm:text-5xl">ALICE IN WONDERLAND</h2>
          <div class="mt-5 grid gap-8 sm:grid-cols-[2fr_1fr]">
            <p class="max-w-[560px] text-sm leading-7">
             Este proyecto reinterpreta el clásico de Lewis Carroll para un público juvenil 
             (9-11 años), fusionando la calidez de las técnicas tradicionales con la precisión
             digital. El objetivo fue crear una propuesta visual coherente que transforme el libro 
             en un objeto artístico integral.
             La metodología combina una base pictórica manual en acrílico y lápices de colores con 
             un proceso posterior de postproducción digital para la maquetación y ajustes finales. 
             El desarrollo incluye el diseño de la cubierta (portada, lomo y contraportada), las 
             guardas y la composición de dobles páginas, logrando un equilibrio perfecto entre la 
             ilustración y la narrativa.
            </p>
            <div class="space-y-1 text-sm uppercase sm:justify-self-end">
              <p><span class="font-semibold">Año </span><span class="font-light">2025</span></p>
              <p>
                <span class="font-semibold">ILUSTRACIÓN EDITORIAL</span>
              </p>
              <p>
                <span class="font-semibold">TÉCNICA MIXTA</span>
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








