<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

type HoverImg = { id: number; x: number; y: number; src: string };

const hoverImgs = ref<HoverImg[]>([]);
const pool = [
  "/imagenes/Home/PORTFOLIO 1.png",
  "/imagenes/Home/PORTFOLIO 1.png",
  "/imagenes/Home/PORTFOLIO 1.png",
  "/imagenes/Home/PORTFOLIO 1.png",
  "/imagenes/Home/PORTFOLIO 1.png",

  ];

let last = 0;

function onCtaMove(e: MouseEvent) {
  const now = Date.now();
  if (now - last < 90) return; // controla frecuencia
  last = now;

  const el = e.currentTarget as HTMLElement;
  const rect = el.getBoundingClientRect();

  const img: HoverImg = {
    id: now + Math.random(),
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
    src: pool[Math.floor(Math.random() * pool.length)],
  };

  hoverImgs.value.push(img);
  setTimeout(() => {
    hoverImgs.value = hoverImgs.value.filter((i) => i.id !== img.id);
  }, 900);
}
</script>

<template>
  <section class="home-page" @mousemove="onCtaMove">
    <img
      v-for="img in hoverImgs"
      :key="img.id"
      :src="img.src"
      class="hover-trail-img"
      :style="{ left: `${img.x}px`, top: `${img.y}px` }"
      alt=""
    />

    <section class="home-meta">
      <p class="roles">
        ILUSTRADORA<br />
        FOTOGRAFA<br />
        DISENADORA GRAFICA
      </p>
      <span class="year">2026</span>
    </section>

    <img src="/imagenes/Home/gif6.gif" alt="Portfolio 1" class="portfolio-gif" />

    <section class="home-cta-section">
      <section class="home-cta">
        <p class="cta-line-1">¿BUSCABAS ALGO DIFERENTE?</p>
        <p class="cta-line-2">PUES YA ME HAS ENCONTRADO</p>
        <RouterLink to="/contacto" class="cta-button">¿HABLAMOS?</RouterLink>
      </section>
    </section>
  </section>
</template>


<style scoped>
.home-page {
  min-height: 100vh;
  background: #fff;
  color: #111;
  padding: 18px 26px 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.home-header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  column-gap: 16px;
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

.home-meta {
  margin-top: 56px;
  display: flex;
  align-items: flex-start;
  }

.roles {
  margin: 0;
  font-size: 1.45rem;
  line-height: 1.1;
}

.year {
   margin-left: 373px;
  font-size: 1.45rem;   /* mismo tamaño que roles */
  line-height: 1.1;
}

.portfolio-gif {
  width: 100%;
  max-width: 1600px; /* mas grande */
  height: auto;
  margin-top: 130px;          /* mas arriba */
   align-items: center;
}

.home-cta-section {
  min-height: 100vh;            /* una pantalla entera */
  display: flex;
  align-items: center;          /* centrado vertical */
  justify-content: center;      /* centrado horizontal */
  padding-top: 170px;
  position: relative;
  overflow: hidden;
}

.hover-trail-img {
  position: absolute;
  width: 120px;
  height: 120px;
  object-fit: cover;
  pointer-events: none;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  animation: trailFade 0.9s ease forwards;
  z-index: 1;
}

.home-cta {
  text-align: center;
  position: relative;
  z-index: 2;
}

@keyframes trailFade {
  0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
  20% { opacity: 0.9; }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(1.05); }
}

.cta-line-1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.4rem);
  font-style: italic;
  line-height: 1.05;
}

.cta-line-2 {
  margin: 6px 0 0;
  font-size: clamp(2.2rem, 4.2vw, 3.8rem);
  font-weight: 700;
  line-height: 1.05;
}

.cta-button {
  margin: 26px auto 0;
  background: #111;
  color: #fff;
  border-radius: 9999px;
  min-height: 56px;
  padding: 0 22px;
  font-size: 1.2rem;
  font-weight: 400;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}


@media (max-width: 980px) {
  .home-meta {
    flex-direction: column;
    gap: 16px;
  }

  .year {
     margin-left: 0;
  }
}
</style>
