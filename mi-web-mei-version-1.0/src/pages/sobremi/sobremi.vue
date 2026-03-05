
<script setup lang="ts">
import { ArrowLeft, ChevronDown } from "lucide-vue-next";
import { RouterLink } from "vue-router";
import { Card } from "@/components/ui/card";
import { ref } from "vue";

const openItem = ref<string | null>(null);

const aboutItems = [
  {
    key: "experiencia",
    title: "EXPERIENCIA",
    body: "Freelance en diseño gráfico, branding y piezas para redes.",
  },
  {
    key: "educacion",
    title: "EDUCACIÓN",
    body: "Grado en Diseño y Tecnologías Creativas, UPV.",
  },
  {
    key: "idiomas",
    title: "IDIOMAS",
    body: "Español (nativo), Inglés (B2).",
  },
  {
    key: "habilidades",
    title: "HABILIDADES",
    body: "Dirección de arte, ilustración, fotografía y diseño editorial.",
  },
  {
    key: "softwares",
    title: "SOFTWARES",
    body: "Illustrator, Photoshop, InDesign, Figma, Lightroom.",
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

        <div v-if="openItem === item.key" class="accordion-content">
          {{ item.body }}
        </div>
      </article>
    </section>
    
  </section>
</template>

<style scoped>
.about-page {
  padding: 14px 26px 28px;
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
  margin: 64px auto 0;
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
  min-height: 62px;
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

</style>





