<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

type HoverImg = { id: number; x: number; y: number; src: string };

const hoverImgs = ref<HoverImg[]>([]);
const pool = [
  "/imagenes/Proyectos/vejez/ombligo.jpg",
  "/imagenes/Proyectos/vejez/brazo.jpg",
  "/imagenes/Proyectos/Mindpop/tablero.png",
  "/imagenes/Proyectos/Mindpop/cartas.jpg",
  "/imagenes/Proyectos/Crefad/mockup.jpg",  
  "/imagenes/Proyectos/Comic/pagina.jpg",
  "/imagenes/Proyectos/Comic/portada.jpg",
  "/imagenes/Proyectos/Loquenosmueve/Mockupcartel.png",  
  "/imagenes/Proyectos/Kaoka/detalledelante.jpg",  
  ];

let last = 0;

function onCtaMove(e: MouseEvent) {
  const now = Date.now();
  if (now - last < 160) return; // controla frecuencia
  last = now;

  const el = e.currentTarget as HTMLElement;
  const rect = el.getBoundingClientRect();

  const img: HoverImg = {
    id: now + Math.random(),
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
    src: pool[Math.floor(Math.random() * pool.length)] ?? "/imagenes/Home/PORTFOLIO 1.png",
  };

  hoverImgs.value.push(img);
  setTimeout(() => {
    hoverImgs.value = hoverImgs.value.filter((i) => i.id !== img.id);
  }, 1500);
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
        DISEÑADORA GRAFICA
      </p>
      <span class="year">2026</span>
    </section>

    <img src="/imagenes/Home/gif6.gif" alt="Portfolio 1" class="portfolio-gif" />

    <section class="home-cta-section">
      <section class="home-cta">
        <p class="cta-line-1">¿BUSCABAS ALGO DIFERENTE?</p>
        <p class="cta-line-2">PUES YA ME HAS ENCONTRADO</p>
        <RouterLink to="/contacto" class="cta-button">¿HÁBLAMOS?</RouterLink>
      </section>
    </section>
  </section>
</template>


<style scoped>
.home-page {
  min-height: 100vh;
  background: #fff;
  color: #111;
  padding: clamp(12px, 2vw, 18px) clamp(12px, 2.4vw, 26px) clamp(14px, 2.5vw, 24px);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.home-meta {
  margin-top: clamp(22px, 6vw, 56px);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: clamp(10px, 2vw, 20px);
}

.roles {
  margin: 0;
  font-size: clamp(0.55rem, 0.35rem + 1.4vw, 1.45rem);
  line-height: 1.12;
}

.year {
  margin-left: auto;
  font-size: clamp(0.55rem, 0.35rem + 1.4vw, 1.45rem);
  line-height: 1.12;
}

.portfolio-gif {
  width: 100%;
  max-width: 1600px;
  height: auto;
  margin-top: clamp(46px, 10vw, 130px);
}


.home-cta-section {
  min-height: clamp(460px, 72vh, 100vh);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: clamp(70px, 12vw, 170px);
  padding-bottom: clamp(70px, 10vw, 160px);
  position: relative;
  overflow: hidden;
}


.hover-trail-img {
  position: absolute;
  width: clamp(88px, 10vw, 120px);
  height: clamp(88px, 10vw, 120px);
  object-fit: cover;
  pointer-events: none;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  animation: trailFade 1.5s ease-out forwards;
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
  margin: clamp(14px, 2vw, 26px) auto 0;
  background: #111;
  color: #fff;
  border-radius: 9999px;
  min-height: clamp(38px, 5vw, 56px);     
  padding: 0 clamp(10px, 1.8vw, 22px);     
  font-size: clamp(0.78rem, 1.5vw, 1.2rem);
  font-weight: 400;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: transform .15s ease, background-color .15s ease, color .15s ease, box-shadow .15s ease, border-color .15s ease, opacity .15s ease;
}

.cta-button:hover{
  opacity: .85;
  background: #000;
  transform: translateY(-1px);
  box-shadow: 0 10px 20px rgba(0,0,0,.15);
}


</style>
