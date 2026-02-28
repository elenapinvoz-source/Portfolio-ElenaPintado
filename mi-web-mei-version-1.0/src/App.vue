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
  <div class="min-h-screen bg-black text-slate-100">
    <header class="sticky top-0 z-20 border-b border-white/10 bg-black">
      <div class="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <RouterLink to="/" class="text-sm font-bold tracking-[0.2em] text-cyan-300">
          ELENA PINTADO
        </RouterLink>

        <nav class="flex items-center gap-2">
          <RouterLink
            v-for="item in nav"
            :key="item.to"
            :to="item.to"
            class="rounded-full px-3 py-1.5 text-xs text-slate-300 transition hover:bg-white/10 hover:text-white sm:text-sm"
            active-class="bg-cyan-500 text-slate-950"
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
      <div class="mx-auto w-full max-w-6xl px-4 py-8 text-sm text-slate-300 sm:px-6">
        Portfolio de Elena Pintado
      </div>
    </footer>
  </div>
</template>

<style scoped>

</style>

