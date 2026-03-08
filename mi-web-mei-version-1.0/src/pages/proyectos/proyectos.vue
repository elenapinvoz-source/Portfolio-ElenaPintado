<script setup lang="ts">
import { Card } from "@/components/ui/card"

const projects = [
  { id: 1, title: "Más", to: { name: "proyecto-kaoka" }, image: "/imagenes/Home/EPV TITU.png" },
  { id: 2, title: "Más", to: { name: "proyecto-mind-pop" }, image: "/imagenes/Home/EPV TITU.png" },
  { id: 3, title: "Más", to: { name: "proyecto-crefad" }, image: "/imagenes/Home/EPV TITU.png" },
  { id: 4, title: "Más", to: { name: "proyecto-comic" }, image: "/imagenes/Home/EPV TITU.png" },
  { id: 5, title: "Más", to: { name: "proyecto-lavejez" }, image: "/imagenes/Home/EPV TITU.png" },
  { id: 6, title: "Más", to: { name: "proyecto-loquenosmueve" }, image: "/imagenes/Home/EPV TITU.png" },
];

</script>

<template>
  <section class="mx-auto w-full max-w-6xl px-4 py-10">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <RouterLink v-for="p in projects" :key="p.id" :to="p.to" class="group block">
        <Card class="relative overflow-hidden rounded-none p-0">
          <img :src="p.image" :alt="p.title" class="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-[420px]" />
          <div class="absolute inset-0 grid place-items-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span class="text-3xl font-light underline underline-offset-4 sm:text-4xl">{{ p.title }}</span>
          </div>
        </Card>
      </RouterLink>
    </div>
  </section>
</template>


