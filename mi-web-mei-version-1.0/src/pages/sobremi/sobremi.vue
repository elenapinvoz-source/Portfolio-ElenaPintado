
<script setup lang="ts">
import { ArrowLeft, ChevronDown } from "lucide-vue-next";
import { RouterLink } from "vue-router";
import { Card } from "@/components/ui/card";
import { ref } from "vue";

const openItem = ref<string | null>(null);

const softwareSkills = [
  { key: "photoshop", name: "Photoshop", icon: "/imagenes/software/photoshop.png", level: 75, fallback: "Ps" },
  { key: "indesign", name: "InDesign", icon: "/imagenes/software/indesign.png", level: 88, fallback: "Id" },
  { key: "illustrator", name: "Illustrator", icon: "/imagenes/software/illustrator.png", level: 95, fallback: "Ai" },
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

</script>

<template>
  <section class="about-page">
    <RouterLink to="/" class="about-back">
      <ArrowLeft :size="24" :stroke-width="1.75" />
      <span>SOBRE MI</span>
    </RouterLink>

    <section class="about-content">
      <Card class="photo-card">
        <img
          src="/imagenes/Home/PORTFOLIO%201.png"
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
              <img :src="software.icon" :alt="software.name" class="software-icon" />
              <span class="software-fallback">{{ software.fallback }}</span>
            </div>

            <div class="software-bar">
              <div class="software-fill"></div>
            </div>
          </div>
        </div>

      </article>
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
  padding: 14px 26px 90px;
  background: #fff;
  color: #111;
}

.about-back {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  color: #111;
  text-decoration: none;
  font-size: 1rem;
  margin-left: 0;
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
  margin-left: 0;
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

@media (max-width: 980px) {
  .about-content {
    margin-left: 0;
    flex-direction: column;
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



</style>





