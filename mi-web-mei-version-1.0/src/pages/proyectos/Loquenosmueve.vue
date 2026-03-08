
<script setup lang="ts">
import { RouterLink } from "vue-router"
import { ArrowLeft } from "lucide-vue-next"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const portadaGrande =  "/imagenes/Proyectos/Loquenosmueve/mupirosa.jpg"
const imagenPequena = "/imagenes/Home/EPV TITU.png"

const carouselImages = [
  "/imagenes/Home/EPV TITU.png",
  "/imagenes/Home/EPV TITU.png",
  "/imagenes/Home/EPV TITU.png",
]
</script>

<template>
  <h1 class="mb-4 text-3xl sm:text-4xl text-white">LOQUENOSMUEVE</h1>

  <section class="mx-auto w-full max-w-5xl px-4 py-10 text-white">
    <RouterLink
      to="/proyectos"
      class="mb-6 inline-flex w-fit items-center gap-2 ml-0 sm:-ml-20 text-[#d9f227] hover:opacity-80"
    >
      <ArrowLeft :size="34" class="sm:h-10 sm:w-10" />
    </RouterLink>

    <div class="grid grid-cols-1 gap-3 lg:grid-cols-2">
      <!-- Arriba izquierda: imagen grande fija -->
      <Card class="w-[78%] justify-self-start overflow-hidden rounded-none border-white/20 bg-white/5 p-0">
        <div class="aspect-square w-full bg-black/20">
          <img
            :src="portadaGrande"
            alt="Loquenosmueve portada"
            class="h-full w-full object-contain p-2"
          />
        </div>
      </Card>

      
      


      <!-- Arriba derecha: carrusel -->
      <Carousel class="w-full">
        <CarouselContent>
          <CarouselItem v-for="(img, i) in carouselImages" :key="i">
            <Card class="overflow-hidden rounded-none border-white/20 bg-white/5 p-0">
              <img
                :src="img"
                :alt="`Loquenosmueve carrusel ${i + 1}`"
                class="h-[280px] w-full object-cover sm:h-[360px] lg:h-[410px]"
              />
            </Card>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious class="left-3 border-white/30 bg-black/55 text-white hover:bg-black/70" />
        <CarouselNext class="right-3 border-white/30 bg-black/55 text-white hover:bg-black/70" />
      </Carousel>

     <!-- Fila de abajo -->
<div class="grid grid-cols-1 gap-4 lg:grid-cols-[220px_1fr] lg:items-start">
  <!-- caja pequeña -->
  <Card class="w-full overflow-hidden rounded-none border-white/20 bg-white/5 p-0">
    <div class="aspect-[4/3] w-full">
      <img
        :src="imagenPequena"
        alt="Loquenosmueve detalle"
        class="h-full w-full object-cover"
      />
    </div>
  </Card>

  <!-- texto al lado -->
  <div class="self-start">
    <h2 class="mb-2 text-2xl">Loquenosmueve</h2>
    <p class="text-sm leading-relaxed text-white/80">
      A cookbook where design takes the lead. It’s food you see before you cook...
    </p>
  </div>
</div>



    </div>
  </section>
</template>


