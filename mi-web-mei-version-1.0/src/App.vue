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
