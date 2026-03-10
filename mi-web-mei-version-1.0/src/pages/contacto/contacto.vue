<script setup lang="ts">
import { ref } from "vue";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Instagram } from "lucide-vue-next";

const servicios = [
  "Branding",
  "Diseño editorial",
  "Ilustración",
  "Fotografía",
  "Otro",
];

const nombre = ref("");
const apellido = ref("");
const servicio = ref("");
const email = ref("");
const descripcion = ref("");
const como = ref("");

const inputClass =
  "!border-0 !border-b !border-b-[#111] !rounded-none !bg-transparent px-0 pt-0 pb-2 !h-auto !shadow-none !text-[#111] focus-visible:ring-0 focus-visible:border-transparent";
const textareaClass = `${inputClass} !min-h-[32px] resize-y`;
</script>

<template>
  <section
    class="min-h-screen bg-white text-[#111] pt-6 pb-12 px-[clamp(20px,6vw,100px)] max-[900px]:pt-5 max-[900px]:pb-9 max-[900px]:px-[22px]"
  >
    
    <img
      src="/imagenes/Contacto/ANIMACIÓN-PROYECTO.gif"
      alt="TU PROYECTO, MI [OBSESIÃ“N]"
      class="contact-title-gif block w-[min(760px,100%)] mx-auto mb-7"
    />

    <section
      class="contact-layout mx-auto grid max-w-[1120px] grid-cols-[1fr_1.15fr] gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-[26px]"
    >
      <aside
        class="contact-left flex min-h-[420px] flex-col justify-start gap-[230px] max-[900px]:min-h-0 max-[900px]:gap-6"
      >
        <p
          class="contact-copy m-0 text-[1.3rem] leading-[1.02] font-normal tracking-[-0.01em] max-[640px]:text-[1.08rem]"
        >
          NO DUDES EN<br />
          TAN SOLO<br />
          PREGUNTAR
        </p>

        <div class="contact-links flex flex-col gap-[10px]">
          <a
            href="mailto:elenapinvoz@gmail.com"
            class="contact-link flex items-center gap-2 text-[#111] no-underline text-[0.9rem] break-words hover:opacity-75 max-[640px]:text-[0.85rem]"
          >
            <Mail :size="16" />
            <span>elenapinvoz@gmail.com</span>
          </a>

          <a
            href="https://instagram.com/elsbydesign"
            target="_blank"
            rel="noreferrer"
            class="contact-link flex items-center gap-2 text-[#111] no-underline text-[0.9rem] break-words hover:opacity-75 max-[640px]:text-[0.85rem]"
          >
            <Instagram :size="16" />
            <span>@elsbydesign</span>
          </a>
        </div>
      </aside>

      <form class="contact-form flex flex-col gap-[14px]" @submit.prevent>
        <div class="row-2 grid grid-cols-2 gap-4 max-[900px]:grid-cols-1 max-[900px]:gap-[14px]">
          <label class="field flex flex-col gap-[7px]">
            <span class="text-[0.8rem] font-semibold">NOMBRE</span>
            <Input v-model="nombre" :class="inputClass" />
          </label>

          <label class="field flex flex-col gap-[7px]">
            <span class="text-[0.8rem] font-semibold">APELLIDO</span>
            <Input v-model="apellido" :class="inputClass" />
          </label>
        </div>

        <label class="field flex flex-col gap-[7px]">
          <span class="text-[0.8rem] font-semibold">SERVICIO</span>

          <div class="service-wrap w-full border-b border-[#111]">
            <Select v-model="servicio">
              <SelectTrigger
                class="w-full !border-0 !rounded-none !shadow-none px-0 py-0 h-auto focus-visible:ring-0 focus-visible:border-transparent text-[#111] [&_svg]:text-[#111] [&_svg]:opacity-100"
              >
                <SelectValue placeholder="" />
              </SelectTrigger>

              <SelectContent class="!border-0 !shadow-none !ring-0 !rounded-none">
                <SelectItem v-for="s in servicios" :key="s" :value="s">
                  {{ s }}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </label>

        <label class="field flex flex-col gap-[7px]">
          <span class="text-[0.8rem] font-semibold">EMAIL</span>
          <Input v-model="email" type="email" :class="inputClass" />
        </label>

        <label class="field flex flex-col gap-[7px]">
          <span class="text-[0.8rem] font-semibold">DESCRIPCIÓN DEL PROYECTO</span>
          <Textarea v-model="descripcion" rows="1" :class="textareaClass" />
        </label>

        <label class="field flex flex-col gap-[7px]">
          <span class="text-[0.8rem] font-semibold">¿CÓMO ME HAS ENCONTRADO?</span>
          <Input v-model="como" :class="inputClass" />
        </label>

        <Button
          type="submit"
          class="!mt-2 !w-fit !rounded-full !border-0 !bg-[#111] px-[14px] py-2 text-[0.72rem] !text-white hover:!bg-black hover:opacity-85"
        >
          TRABAJA CONMIGO
        </Button>
      </form>
    </section>
  </section>

  <section class="relative bg-white w-full overflow-hidden pb-10 px-[clamp(20px,6vw,100px)]">
    <div class="relative w-full max-w-[1200px] mx-auto min-h-[80vh] flex flex-col justify-between py-10">
      
      <div class="relative flex justify-between items-start w-full">
        <div class="flex flex-col">
          <h2 class="m-0 text-[clamp(5rem,13vw,11rem)] font-bold leading-[0.8] tracking-[0.01em]">
            THANK
          </h2>
          <p class="mt-8 ml-2 text-[clamp(1rem,2.2vw,1.45rem)] leading-[1.04] font-normal">
            YO SIEMPRE ESTOY<br />
            ABIERTA A NUEVOS<br />
            E INSPIRADORES<br />
            PROYECTOS
          </p>
        </div>
        
        <span class="text-[clamp(5rem,10vw,10rem)] font-bold leading-[0.8] pt-2">
          )
        </span>
      </div>

      <div class="relative flex justify-between items-end w-full">
        <span class="text-[clamp(5rem,10vw,10rem)] font-bold leading-[0.8] pb-2">
          (
        </span>

        <div class="flex flex-col items-end">
          <p class="mb-8 mr-2 text-[clamp(1rem,2.2vw,1.45rem)] leading-[1.04] font-normal text-right">
            VAMOS A<br />
            TRABAJAR<br />
            JUNTOS
          </p>
          <h2 class="m-0 text-[clamp(5rem,13.5vw,11.5rem)] font-bold leading-[0.8] tracking-[0.01em]">
            YOU
          </h2>
        </div>
      </div>

    </div>
  </section>

</template>

<style scoped>

</style>