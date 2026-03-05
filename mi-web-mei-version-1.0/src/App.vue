<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { Instagram, Mail } from "lucide-vue-next";

const mainNav = [
  { to: "/", label: "INICIO" },
  { to: "/sobremi", label: "SOBRE MI" },
  { to: "/proyectos", label: "PROYECTOS" },
];

const instagramUser = "@elsbydesign";
const instagramUrl = "https://instagram.com/elsbydesign";
const email = "elenapinvoz@gmail.com";

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
      <p class="footer-copy">© 2026 - Elena Pintado</p>

      <div class="footer-links">
        <a
          class="footer-link"
          :href="instagramUrl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram :size="14" />
          <span>{{ instagramUser }}</span>
        </a>

        <a class="footer-link" :href="`mailto:${email}`" aria-label="Correo">
          <Mail :size="14" />
          <span>{{ email }}</span>
        </a>
      </div>
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

.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fff;
  color: #111;
}

.app-main {
  flex: 1;
}

.app-footer {
  background: #111;
  color: #fff;
  border-top: 1px solid #2a2a2a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 32px;
}

.footer-copy {
  margin: 0;
  font-size: 0.85rem;
}

.footer-links {
  display: inline-flex;
  align-items: center;
  gap: 14px;
}

.footer-link {
  color: #fff;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
}

.footer-link:hover {
  opacity: 0.78;
}

@media (max-width: 980px) {
  .app-footer {
    flex-direction: column;
    align-items: flex-start;
  }
}


</style>
