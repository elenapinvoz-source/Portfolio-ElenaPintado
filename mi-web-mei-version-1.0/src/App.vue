<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

const mainNav = [
  { to: "/", label: "INICIO" },
  { to: "/sobremi", label: "SOBRE MI" },
  { to: "/proyectos", label: "PROYECTOS" },
];
</script>

<template>
  <div class="app-shell">
    <header class="app-header">
      <RouterLink to="/" class="brand">EPINVOZ</RouterLink>

      <nav class="menu-pill" aria-label="Principal">
        <RouterLink
          v-for="item in mainNav"
          :key="item.to"
          :to="item.to"
          class="menu-link"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <RouterLink to="/contacto" class="contact-btn">CONTÁCTAME</RouterLink>
    </header>

    <main class="app-main">
      <RouterView />
    </main>

    <footer class="app-footer">
      © 2026 - Elena Pintado
    </footer>
  </div>
</template>

<style scoped>
.app-header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  column-gap: 16px;
  padding: 18px 26px;
}

.brand {
  justify-self: start;
  color: #111;
  text-decoration: none;
  font-size: 1.95rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.menu-pill {
  justify-self: center;
  border: 2px solid #111;
  border-radius: 9999px;
  min-height: 56px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 26px;
}

.menu-link {
  color: #111;
  text-decoration: none;
  font-size: 1.55rem;
  line-height: 1;
}

.menu-link.router-link-active,
.contact-btn.router-link-active {
  text-decoration: underline;
  text-underline-offset: 0.22em;
  text-decoration-thickness: 2px;
}


.contact-btn {
  justify-self: end;
  background: #111;
  color: #fff;
  border-radius: 9999px;
  min-height: 56px;
  padding: 0 22px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  font-size: 1.2rem;
}

@media (max-width: 980px) {
  .app-header {
    grid-template-columns: 1fr;
    row-gap: 12px;
  }

  .brand,
  .menu-pill,
  .contact-btn {
    justify-self: start;
  }
}

</style>
