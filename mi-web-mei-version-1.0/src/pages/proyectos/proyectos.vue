<script setup lang="ts">
import { Card } from "@/components/ui/card"

const projects = [
  { id: 1, title: "Proyecto 1", image: "/imagenes/Home/EPV TITU.png", link: "#" },
  { id: 2, title: "Proyecto 2", image: "/imagenes/Home/EPV TITU.png", link: "#" },
  { id: 3, title: "Proyecto 3", image: "/imagenes/Home/EPV TITU.png", link: "#" },
  { id: 4, title: "Proyecto 4", image: "/imagenes/Home/EPV TITU.png", link: "#" },
  { id: 5, title: "Proyecto 5", image: "/imagenes/Home/EPV TITU.png", link: "#" },
  { id: 6, title: "Proyecto 6", image: "/imagenes/Home/EPV TITU.png", link: "#" },
]
</script>

<template>
  <section class="mx-auto w-full max-w-6xl px-4 py-10">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <a v-for="p in projects" :key="p.id" :href="p.link" class="group block">
        <Card class="relative overflow-hidden rounded-none p-0">
          <img :src="p.image" :alt="p.title" class="h-[420px] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div class="absolute inset-0 grid place-items-center bg-pink-100/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span class="text-4xl font-light underline underline-offset-4">More</span>
          </div>
        </Card>
      </a>
    </div>
  </section>
</template>

