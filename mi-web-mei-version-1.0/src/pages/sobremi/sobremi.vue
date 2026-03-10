
<script setup lang="ts">
import { ChevronDown, ArrowDownRight } from "lucide-vue-next";
import { Card } from "@/components/ui/card";
import { ref } from "vue";

const openItem = ref<string | null>(null);

const softwareSkills = [
  { key: "photoshop", name: "Photoshop", icon: "", level: 75, fallback: "Ps" },
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
  <section
    class="bg-white px-[26px] pt-10 pb-[90px] text-[#111] max-[980px]:px-[18px] max-[980px]:pt-[26px] max-[980px]:pb-[56px]"
  >
    <section
      class="mt-[10px] ml-10 flex items-start justify-center gap-[22px] max-[980px]:ml-0 max-[980px]:flex-col max-[980px]:gap-4"
    >
      <Card
        class="h-[430px] w-[320px] flex-none overflow-hidden rounded-none border border-[#111] bg-white p-0 shadow-none max-[640px]:h-auto max-[640px]:w-full max-[640px]:max-w-[320px] max-[640px]:basis-auto max-[640px]:aspect-[320/430]"
      >
        <img
          src="/imagenes/Sobremi/platobien.jpg"
          alt="Elena Pintado"
          class="block h-full w-full object-contain"
        />
      </Card>

      <p
        class="w-[700px] text-[2.7rem] font-bold leading-[1.02] tracking-[-0.01em] max-[980px]:w-full max-[980px]:text-[1.8rem]"
      >
        HOLI! YO SOY <em class="font-normal italic">ELENA PINTADO</em> (PUEDES
        LLAMARME <em class="font-normal italic">ELEN</em>). TENGO 20 AÑOS Y
        ESTOY ESTUDIANDO DISEÑO Y TECNOLOGÍAS CREATIVAS EN LA UNIVERSIDAD
        POLITÉCNICA DE VALENCIA - MI CARRERA ES LA FORMA QUE TENGO DE ENTENDER
        EL MUNDO.
      </p>
    </section>

    <section
      class="mx-auto mt-20 w-[1042px] max-w-[calc(100%-52px)] max-[980px]:mt-10 max-[980px]:w-full max-[980px]:max-w-full"
    >
      <article
        v-for="item in aboutItems"
        :key="item.key"
        class="border-t border-[#111] last:border-b"
      >
        <button
          class="flex min-h-[72px] w-full items-center justify-between bg-transparent py-0 text-left text-[2.1rem] font-bold text-[#111] max-[980px]:min-h-[56px] max-[980px]:text-[1.35rem]"
          type="button"
          @click="toggleItem(item.key)"
        >
          <span>{{ item.title }}</span>

          <ChevronDown
            :size="22"
            class="transition-transform duration-200"
            :class="{ 'rotate-180': openItem === item.key }"
          />
        </button>

        <div
          v-if="openItem === item.key && item.key !== 'softwares'"
          class="whitespace-pre-line pb-5 text-[1.2rem] leading-[1.35]"
        >
          {{ item.body }}
        </div>

        <div
          v-if="openItem === item.key && item.key === 'softwares'"
          class="flex flex-col gap-[14px] pt-[6px] pb-5"
        >
          <div
            v-for="software in softwareSkills"
            :key="software.key"
            class="group flex items-center gap-4 max-[640px]:gap-[10px]"
            :style="{ '--skill-level': `${software.level}%` }"
          >
            <div
              class="relative h-[42px] w-[42px] flex-none overflow-hidden rounded-[10px] border border-[#111] bg-[#111]"
              :title="software.name"
            >
              <img
                v-if="software.icon"
                :src="software.icon"
                :alt="software.name"
                class="block h-full w-full object-cover"
              />
              <span
                class="pointer-events-none absolute inset-0 inline-flex items-center justify-center text-base font-bold text-white"
              >
                {{ software.fallback }}
              </span>
            </div>

            <div
              class="h-2 w-[290px] overflow-hidden rounded-[900px] border-[1.5px] border-[#111] bg-white max-[640px]:w-full"
            >
              <div
                class="software-fill h-full rounded-[inherit] bg-[#111] transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </article>
    </section>

    <section class="mx-auto mt-[110px] w-full max-[980px]:mt-[72px]">
      <div
        class="mx-auto w-[1042px] max-w-[calc(100%-52px)] max-[980px]:w-full max-[980px]:max-w-full"
      >
        <h3
          class="mb-[60px] ml-[60px] inline-flex items-center gap-2 text-[2.1rem] font-bold max-[980px]:mb-8 max-[980px]:ml-0 max-[980px]:gap-[6px] max-[980px]:text-[1.4rem]"
        >
          HAZ CLICK PARA CONOCERME
          <ArrowDownRight :size="40" class="max-[980px]:h-8 max-[980px]:w-8" />
        </h3>
      </div>

      <div class="ml-[calc(50%-50vw)] w-screen">
        <div class="grid w-full grid-cols-6 max-[980px]:grid-cols-2">
          <div
            v-for="card in conocemeCards"
            :key="card.key"
            class="group relative aspect-[4/5] overflow-hidden bg-transparent"
          >
            <img
              :src="card.img"
              :alt="card.label"
              class="block h-full w-full object-cover transition duration-[450ms] ease-out group-hover:scale-[1.04] group-hover:brightness-[0.78]"
            />
            <span
              class="absolute inset-0 grid place-items-center bg-black/40 text-[1.06rem] font-bold tracking-[0.02em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-[980px]:text-[1.05rem]"
            >
              {{ card.label }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section
      class="mx-auto mt-[155px] mb-[95px] max-w-[980px] text-center max-[980px]:mt-[90px] max-[980px]:mb-9"
    >
      <p
        class="m-0 text-[3.4rem] font-normal italic leading-[1.2] tracking-[-0.015em] max-[980px]:text-[clamp(1.7rem,8vw,2.5rem)] max-[980px]:leading-[1.16]"
      >
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
.software-fill {
  width: 0;
}

.group:hover .software-fill {
  width: var(--skill-level);
}
</style>

