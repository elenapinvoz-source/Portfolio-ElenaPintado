
<script setup lang="ts">
import { ChevronDown, ArrowDownRight } from "lucide-vue-next";
import { Card } from "@/components/ui/card";
import { ref } from "vue";

const openItem = ref<string | null>(null);

const softwareSkills = [
  { key: "photoshop", name: "Photoshop", icon:"", level: 75, fallback: "Ps" },
  { key: "indesign", name: "InDesign", icon: "", level: 88, fallback: "Id" },
  { key: "illustrator", name: "Illustrator", icon: "", level: 95, fallback: "Ai" },
  { key: "procreate", name: "Procreate", icon: "/imagenes/software/procreate.png", level: 90, fallback: "Pc" },
  { key: "canva", name: "Canva", icon: "/imagenes/software/canva.png", level: 86, fallback: "Cv" },
];


const aboutItems = [
  {
    key: "experiencia",
    title: "EXPERIENCIA",
    body: "REBRANDING Y COMUNICACIÓN VISUAL - CREFAD \nPROYECTOS DE AUTOR: FOTOGRAFÍA, DISEÑO E ILUSTRACIÓN",
  },
  {
    key: "educacion",
    title: "EDUCACIÓN",
    body: "GRADO EN DISEÑO Y TECNOLOGÍAS CREATIVAS / UPV (2023 — PRESENTE)",
  },
  {
    key: "idiomas",
    title: "IDIOMAS",
    body: "ESPAÑOL / NATIVO \nINGLÉS / NIVEL INTERMEDIO (B2 EN PROCESO)",
  },
  {
    key: "habilidades",
    title: "HABILIDADES",
    body: "IDENTIDAD VISUAL \nFOTOGRAFÍA DIGITAL \nDISEÑO EDITORIAL Y CARTELERÍA \nILUSTRACIÓN",
  },
  {
    key: "softwares",
    title: "SOFTWARES",
    body: "",
  },
  {
    key: "intereses",
    title: "INTERESES",
    body: "Branding, moda, cultura visual y narrativa editorial.",
  },
];

function toggleItem(key: string) {
  openItem.value = openItem.value === key ? null : key;
}

const conocemeCards = [
  { key: "obs", label: "OBSERVADORA", img: "/imagenes/Sobremi/rojo.jpg" },
  { key: "cur", label: "CURIOSA", img: "/imagenes/Sobremi/vaca.JPG" },
  { key: "ana", label: "ANALÍTICA", img: "/imagenes/Sobremi/azul.jpg" },
  { key: "det", label: "DETALLISTA", img: "/imagenes/Sobremi/libro.jpg" },
  { key: "res", label: "RESOLUTIVA", img: "/imagenes/Sobremi/playa.jpg" },
  { key: "per", label: "PERFECCIONISTA", img: "/imagenes/Sobremi/cabina.jpg" },
];


</script>

<template>
  <section class="about-page">
    <section class="about-content">
      <Card class="photo-card">
        <img
          src="/imagenes/Sobremi/platobien.jpg"
          alt="Elena Pintado"
          class="photo-image"
        />
      </Card>

      <p class="about-text">
        HOLI! YO SOY <em>ELENA PINTADO</em> (PUEDES LLAMARME <em>ELEN</em>). TENGO
        20 ANOS Y ESTOY ESTUDIANDO DISEÑO Y TECNOLOGÍAS CREATIVAS EN LA
        UNIVERSIDAD POLITÉCNICA DE VALENCIA - MI CARRERA ES LA FORMA QUE TENGO DE
        ENTENDER EL MUNDO.
      </p>
    </section>

     <section class="about-accordion">
      <article
        v-for="item in aboutItems"
        :key="item.key"
        class="accordion-item"
      >
        <button class="accordion-trigger" type="button" @click="toggleItem(item.key)">
          <span>{{ item.title }}</span>
          <ChevronDown
            :size="22"
            class="accordion-icon"
            :class="{ 'is-open': openItem === item.key }"
          />
        </button>

        <div v-if="openItem === item.key && item.key !== 'softwares'" class="accordion-content">
          {{ item.body }}
        </div>

        <div v-if="openItem === item.key && item.key === 'softwares'" class="accordion-content software-content">
          <div
            v-for="software in softwareSkills"
            :key="software.key"
            class="software-row"
            :style="{ '--skill-level': `${software.level}%` }"
          >
            <div class="software-icon-wrap" :title="software.name">
                <img
                  v-if="software.icon"
                  :src="software.icon"
                  :alt="software.name"
                  class="software-icon"
                />
              <span class="software-fallback">{{ software.fallback }}</span>
            </div>

            <div class="software-bar">
              <div class="software-fill"></div>
            </div>
          </div>
        </div>

      </article>
    </section>
    <section class="about-conoceme">
      <div class="conoceme-head">
        <h3 class="conoceme-title">
          HAZ CLICK PARA CONOCERME
          <ArrowDownRight :size="40" class="conoceme-arrow" />
        </h3>
      </div>

      <div class="conoceme-bleed">
        <div class="conoceme-grid">
          <div
            v-for="card in conocemeCards"
            :key="card.key"
            class="conoceme-card"
          >
            <img :src="card.img" :alt="card.label" class="conoceme-img" />
            <span class="conoceme-overlay">{{ card.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="about-quote">
      <p>
        MI CABEZA NUNCA SE CALLA Y POR<br />
        ESO DISEÑO. CADA PROYECTO PASA<br />
        POR MIL FILTROS HASTA QUE<br />
        ENCUENTRO ESA VOZ AUTÉNTICA<br />
        QUE ESTABAS BUSCANDO.
      </p>
    </section>

    
  </section>
</template>

<style scoped>
.about-page {
  padding: 40px 26px 90px;
  background: #fff;
  color: #111;
}

.about-content {
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-left: 40px;
  gap: 22px;
}

.photo-card {
  width: 320px;
  height: 430px;
  flex: 0 0 320px;
  padding: 0;
  border-radius: 0;
  border: 1px solid #111;
  box-shadow: none;
  background: #fff;
  overflow: hidden;
}

.photo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.about-text {
  width: 700px;
  font-size: 2.7rem;
  line-height: 1.02;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.about-text em {
  font-style: italic;
  font-weight: 400;
}

.about-accordion {
  margin: 80px auto 0;
  width: 1042px;                 /* mismo bloque que imagen+texto */
  max-width: calc(100% - 52px);  /* respeta márgenes laterales */
}

.accordion-item {
  border-top: 1px solid #111;
}

.accordion-item:last-child {
  border-bottom: 1px solid #111;
}

.accordion-trigger {
  width: 100%;
  min-height: 72px;
  padding: 0;
  border: 0;
  background: transparent;
  color: #111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2.1rem;
  font-weight: 700;
  cursor: pointer;
  text-align: left;
}

.accordion-icon {
  transition: transform 0.2s ease;
}

.accordion-icon.is-open {
  transform: rotate(180deg);
}

.accordion-content {
  padding: 0 0 20px;
  font-size: 1.2rem;
  line-height: 1.35;
  white-space: pre-line;
}

.software-content { display: flex; flex-direction: column; gap: 14px; padding-top: 6px; }
.software-row { display: flex; align-items: center; gap: 16px; }
.software-icon-wrap { width: 42px; height: 42px; border-radius: 10px; background: #111; overflow: hidden; position: relative; border: 1px solid #111; flex: 0 0 42px; }
.software-icon { width: 100%; height: 100%; object-fit: cover; display: block; }
.software-fallback { position: absolute; inset: 0; color: #fff; font-weight: 700; font-size: 1rem; display: inline-flex; align-items: center; justify-content: center; pointer-events: none; }
.software-bar { height: 8px; border:1.5px solid #111; border-radius: 900px; width: 290px; background: #fff; overflow: hidden; }
.software-fill { width: 0; height: 100%; background: #111; border-radius: inherit; transition: width 0.35s ease; }
.software-row:hover .software-fill { width: var(--skill-level); }

.about-quote {
  margin: 155px auto 95px;
  max-width: 980px;
  text-align: center;
}

.about-quote p {
  margin: 0;
  font-size: 3.4rem;
  line-height: 1.2;
  font-style: italic;
  font-weight: 400;
  letter-spacing: -0.015em;
}

.about-conoceme {
  margin: 110px auto 40px;
  width: 100%;
}

.conoceme-head {
  width: 1042px;
  max-width: calc(100% - 52px);
  margin: 0 auto;
}

.conoceme-bleed {
  width: 100vw;
  margin-left: calc(50% - 50vw);
}

.conoceme-title {
  margin: 0 60px 60px;
  font-size: 2.1rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.conoceme-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
}

.conoceme-card {
  position: relative;
  border: 0;
  padding: 0;
  background: transparent;
  aspect-ratio: 4 / 5;
  overflow: hidden;
}

.conoceme-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.45s ease, filter 0.35s ease;
}

.conoceme-overlay {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.42);
  color: #fff;
  font-size: 1.06rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.conoceme-card:hover .conoceme-overlay {
  opacity: 1;
}

.conoceme-card:hover .conoceme-img {
  transform: scale(1.04);
  filter: brightness(0.78);
}

@media (max-width: 980px) {
  .about-page {
    padding: 26px 18px 56px;
  }

  .about-content {
    margin-left: 0;
    flex-direction: column;
    gap: 16px;
  }

  .about-text {
    width: 100%;
    font-size: 1.8rem;
  }

    .about-accordion {
    width: 100%;
    max-width: 100%;
    margin-top: 40px;
  }

  .accordion-trigger {
    font-size: 1.35rem;
    min-height: 56px;
  }

  .about-conoceme {
    margin: 72px auto 24px;
  }

  .conoceme-head {
    width: 100%;
    max-width: 100%;
  }

  .conoceme-title {
    margin: 0 0 32px;
    font-size: 1.4rem;
    gap: 6px;
  }

  .conoceme-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .conoceme-overlay {
    font-size: 1.05rem;
  }

  .about-quote {
    margin: 90px auto 36px;
  }

  .about-quote p {
    font-size: clamp(1.7rem, 8vw, 2.5rem);
    line-height: 1.16;
  }
}

@media (max-width: 640px) {
  .photo-card {
    width: min(100%, 320px);
    height: auto;
    aspect-ratio: 320 / 430;
    flex-basis: auto;
  }

  .software-row {
    gap: 10px;
  }

  .software-bar {
    width: 100%;
  }
}


</style>





