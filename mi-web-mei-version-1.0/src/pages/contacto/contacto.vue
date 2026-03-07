
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
</script>


<template>
  <section class="contact-page">
    <!-- TITULO GIF -->
    <img
      src="/imagenes/Contacto/ANIMACIÓN-PROYECTO.gif"
      alt="TU PROYECTO, MI [OBSESIÓN]"
      class="contact-title-gif"
    />

    <section class="contact-layout">
      <aside class="contact-left">
        <p class="contact-copy">
          NO DUDES EN<br />
          TAN SOLO<br />
          PREGUNTAR
        </p>

        <div class="contact-links">
          <a href="https://instagram.com/TUUSUARIO" target="_blank" rel="noreferrer">INSTAGRAM</a>
          <a href="mailto:tuemail@correo.com">CORREO</a>
        </div>
      </aside>

      <form class="contact-form" @submit.prevent>
        <div class="row-2">
          <label class="field">
            <span>NOMBRE</span>
            <Input v-model="nombre" class="contact-input" />
          </label>

          <label class="field">
            <span>APELLIDO</span>
            <Input v-model="apellido" class="contact-input" />
          </label>
        </div>

      <label class="field">
        <span>SERVICIO</span>
        <div class="service-wrap">
          <Select v-model="servicio">
           <SelectTrigger class="service-trigger border-0 rounded-none shadow-none px-0 py-0 h-auto focus-visible:ring-0 focus-visible:border-transparent">
            <SelectValue placeholder="" />
          </SelectTrigger>
            <SelectContent class="border-0 shadow-none ring-0 rounded-none">
              <SelectItem v-for="s in servicios" :key="s" :value="s">{{ s }}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </label>

        <label class="field">
          <span>EMAIL</span>
          <Input v-model="email" type="email" class="contact-input" />
        </label>

        <label class="field">
          <span>DESCRIPCIÓN DEL PROYECTO</span>
          <Textarea v-model="descripcion" rows="1" class="contact-input contact-textarea" />
        </label>

        <label class="field">
          <span>¿CÓMO ME HAS ENCONTRADO?</span>
          <Input v-model="como" class="contact-input" />
        </label>

        <Button type="submit" class="send-btn">TRABAJA CONMIGO</Button>
      </form>

    </section>
  </section>
</template>

<style scoped>
.contact-page {
  background: #fff;
  color: #111;
  min-height: 100vh;
  padding: 24px 60px 48px;
}

.contact-title-gif {
  display: block;
  width: min(760px, 100%);
  margin: 0 auto 28px;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 64px;
  align-items: start;
  max-width: 1120px;
  margin: 0 auto;
}

.contact-left {
  min-height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contact-copy {
  margin: 0;
  font-size: 2rem;
  line-height: 1.02;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.contact-links a {
  color: #111;
  text-decoration: none;
  font-size: 0.9rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.row-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.field > span {
  font-size: 0.8rem;
  font-weight: 600;
}

.contact-input {
  border: 0 !important;
  border-bottom: 1px solid #111 !important;
  border-radius: 0 !important;
  background: transparent !important;
  padding: 0 0 8px !important;
  height: auto !important;
  box-shadow: none !important;
  color: #111 !important;
}

.contact-textarea {
  min-height: 32px !important;
  resize: vertical;
}

.service-wrap {
  width: 100%;
  border-bottom: 1px solid #111;
}

.service-wrap :deep(svg) {
  color: #111 !important;
  opacity: 1 !important;
}


.send-btn {
  margin-top: 8px;
  width: fit-content;
  border: 0;
  border-radius: 999px;
  background: #111;
  color: #fff;
  padding: 8px 14px;
  font-size: 0.72rem;
  cursor: pointer;
}

.send-btn:hover {
  background: #000;
  opacity: 0.85;
}


.service-trigger {
  width: 100% !important;
}

@media (max-width: 900px) {
  .contact-page {
    padding: 20px 22px 36px;
  }

  .contact-layout {
    grid-template-columns: 1fr;
    gap: 26px;
  }

  .contact-left {
    min-height: auto;
    gap: 24px;
  }

  .row-2 {
    grid-template-columns: 1fr;
    gap: 14px;
  }
}

</style>

