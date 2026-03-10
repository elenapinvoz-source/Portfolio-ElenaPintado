<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { Instagram, Mail, Menu, X } from "lucide-vue-next";

const mainNav = [
  { to: "/", label: "INICIO" },
  { to: "/sobremi", label: "SOBRE MI" },
  { to: "/proyectos", label: "PROYECTOS" },
];

const instagramUser = "@elsbydesign";
const instagramUrl = "https://instagram.com/elsbydesign";
const email = "elenapinvoz@gmail.com";

const mobileOpen = ref(false);

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

      <button
        class="burger"
        type="button"
        aria-label="Abrir menú"
        aria-controls="mobile-menu"
        :aria-expanded="mobileOpen"
        @click="mobileOpen = true"
      >
        <Menu :size="22" />
      </button>
    </header>

    <div
      v-if="mobileOpen"
      class="mobile-overlay"
      aria-hidden="true"
      @click="mobileOpen = false"
    ></div>

    <aside
      id="mobile-menu"
      class="mobile-drawer"
      :class="{ 'is-open': mobileOpen }"
      aria-label="Menú móvil"
      :aria-hidden="!mobileOpen"
    >
      <button
        class="drawer-close"
        type="button"
        aria-label="Cerrar menú"
        @click="mobileOpen = false"
      >
        <X :size="22" />
      </button>

      <RouterLink
        v-for="item in mainNav"
        :key="item.to"
        :to="item.to"
        class="drawer-link"
        @click="mobileOpen = false"
      >
        {{ item.label }}
      </RouterLink>

      <RouterLink
        to="/contacto"
        class="drawer-cta"
        @click="mobileOpen = false"
      >
        CONTÁCTAME
      </RouterLink>
    </aside>

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
  grid-template-columns: auto 1fr auto;
  align-items: center;
  column-gap: clamp(8px, 2vw, 16px);
  padding: clamp(10px, 2vw, 18px) clamp(10px, 2.5vw, 26px);
}

.brand {
  justify-self: start;
  color: #111;
  text-decoration: none;
  font-size: clamp(1.1rem, 2.2vw, 1.95rem);
  font-weight: 700;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.menu-pill {
  justify-self: center;
  border: 2px solid #111;
  border-radius: 9999px;
  min-height: clamp(38px, 5vw, 56px);
  padding: 0 clamp(10px, 2vw, 20px);
  display: flex;
  align-items: center;
  gap: clamp(8px, 2vw, 26px);
  overflow: hidden;
  white-space: nowrap;
}

.menu-link {
  color: #111;
  text-decoration: none;
  font-size: clamp(0.82rem, 1.8vw, 1.55rem);
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
  min-height: clamp(38px, 5vw, 56px);
  padding: 0 clamp(10px, 1.8vw, 22px);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  font-size: clamp(0.78rem, 1.5vw, 1.2rem);
  white-space: nowrap;
}

.burger {
  display: none;
  justify-self: end;
  grid-column: 3;
  width: 44px;
  height: 44px;
  border:0;
  background: transparent;
  border-radius:0;
  align-items: center;
  justify-content: center;
}

.mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  z-index: 50;
}

.mobile-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: min(86vw, 340px);
  height: 100vh;
  background: #fff;
  border-left: 1px solid rgba(17, 17, 17, 0.15);
  transform: translateX(100%);
  transition: transform 0.2s ease;
  z-index: 60;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.mobile-drawer.is-open {
  transform: translateX(0);
}

.drawer-close {
  align-self: flex-end;
  width: 44px;
  height: 44px;
  border:0;
  background: transparent;
  border-radius:0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.drawer-link {
  text-decoration: none;
  color: #111;
  font-weight: 300;
  letter-spacing: 0.02em;
  padding: 10px 6px;
  transition: opacity .15s ease, transform .15s ease;
}

.drawer-link:hover{
  opacity: .65;
  transform: translateX(2px);
}

.drawer-cta {
  margin-top: auto;
  text-decoration: none;
  background: #111;
  color: #fff;
  border-radius: 9999px;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity .15s ease;
}

.drawer-cta:hover{ 
  opacity: .85; 
}

@media (max-width: 980px) {
  .menu-pill,
  .contact-btn {
    display: none;
  }

  .burger {
    display: inline-flex;
  }
}

.app-footer {
  background: #111;
  color: #fff;
  border-top: 1px solid #2a2a2a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(10px, 2vw, 20px);
  padding: clamp(14px, 2vw, 20px) clamp(14px, 3vw, 32px);
  flex-wrap: wrap;
}

.footer-copy {
  margin: 0;
  font-size: clamp(0.75rem, 1.2vw, 0.85rem);
}

.footer-links {
  display: inline-flex;
  align-items: center;
  gap: clamp(8px, 1.5vw, 14px);
  flex-wrap: wrap;
}

.footer-link {
  color: #fff;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: clamp(0.75rem, 1.2vw, 0.85rem);
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

@media (max-width: 640px) {
  .footer-link span {
    display: none; /* solo en móvil pequeño */
  }

  .footer-link {
    gap: 0;
    width: 28px;
    height: 28px;
    justify-content: center;
  }

  .footer-links {
    gap: 10px;
  }
}



</style>
