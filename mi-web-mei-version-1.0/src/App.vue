<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/sobremi", label: "Sobre mí" },
  { to: "/contacto", label: "Contacto" },
]
</script>

<template>
  <div class="min-h-screen bg-black text-slate-1np00">
    <header class="sticky top-0 z-20 border-b border-white/10 bg-black">
      <div class="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <RouterLink to="/" class="text-sm font-bold tracking-[0.2em] text-[#d9f227]">
          ELENA PINTADO
        </RouterLink>

        <nav class="flex items-center gap-2">
          <RouterLink
            v-for="item in nav"
            :key="item.to"
            :to="item.to"
            class="rounded-full px-3 py-1.5 text-xs font-semibold text-[#d9f227] transition-colors duration-300 hover:bg-white/10 hover:text-[#AB3A5C] sm:text-sm"
            active-class="bg-[#d9f227] text-black"
          >
            {{ item.label }}
          </RouterLink>

        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="border-t border-white/10 bg-black">
      <div class="mx-auto w-full max-w-6xl px-4 py-8 text-sm text-white sm:px-6">
        Portfolio de Elena Pintado
      </div>
    </footer>
  </div>
</template>

<style scoped>

</style>

