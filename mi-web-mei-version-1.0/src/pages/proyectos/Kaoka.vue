
<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ArrowLeft } from "lucide-vue-next";
</script>

<template>
  <section class="mx-auto w-full max-w-4xl px-4 py-10 text-white">
    <RouterLink
      to="/proyectos"
      class="mb-6 inline-flex items-center gap-2 ml-0 sm:-ml-20 text-[#d9f227] hover:opacity-80"
    >
      <ArrowLeft :size="34" class="sm:h-10 sm:w-10" />
    </RouterLink>

    <h1 class="text-3xl sm:text-4xl">Kaoka</h1>
    <p class="mt-4 text-white/80">Contenido del proyecto.</p>
  </section>
</template>


