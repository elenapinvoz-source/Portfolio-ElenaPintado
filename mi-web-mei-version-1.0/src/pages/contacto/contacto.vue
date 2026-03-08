
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
          <a href="mailto:elenapinvoz@gmail.com" class="contact-link">
            <Mail :size="16" />
            <span>elenapinvoz@gmail.com</span>
          </a>
          <a href="https://instagram.com/elsbydesign" target="_blank" rel="noreferrer" class="contact-link">
            <Instagram :size="16" />
            <span>@elsbydesign</span>
          </a>
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
  <section class="thank-section">
    <div class="thank-inner">
      <h2 class="thank-word">THANK</h2>
      <span class="paren paren-right">)</span>

      <p class="mini mini-right">
        VAMOS A<br />
        TRABAJAR<br />
        JUNTOS
      </p>

      <p class="mini mini-left">
        YO SIEMPRE ESTOY<br />
        ABIERTA A NUEVOS<br />
        E INSPIRADORES<br />
        PROYECTOS
      </p>

      <span class="paren paren-left">(</span>
      <h2 class="you-word">YOU</h2>
    </div>
  </section>

</template>

<style scoped>
.contact-page {
  background: #fff;
  color: #111;
  min-height: 100vh;
  padding: 24px clamp(20px, 6vw, 100px) 48px;
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
  justify-content: flex-start;
  gap: 230px;
}

.contact-copy {
  margin: 0;
  font-size: 1.3rem;
  line-height: 1.02;
  font-weight: 400;
  letter-spacing: -0.01em;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-links a {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #111;
  text-decoration: none;
}


.contact-link:hover {
  opacity: 0.75;
}

.contact-links a {
  color: #111;
  text-decoration: none;
  font-size: 0.9rem;
  word-break: break-word;
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

.thank-section {
  position: relative;
  background: #fff;
  min-height: 78vh;
  width: 100%;
  overflow: visible;
  padding-bottom: 40px;
}

.thank-inner {
  position: relative;
  min-height: 78vh;
  top: -20px;
}

.thank-word {
  position: absolute;
  top: 0px;
  left: 28px;
  margin: 0;
  font-size: clamp(4.8rem, 13vw, 10rem);
  font-weight: 700;
  line-height: 0.88;
  letter-spacing: 0.01em;
}

.you-word {
  position: absolute;
  right: 28px;
  bottom: 20px;
  margin: 0;
  font-size: clamp(5rem, 13.5vw, 10.5rem);
  font-weight: 700;
  line-height: 0.88;
  letter-spacing: 0.01em;
}

.paren {
  position: absolute;
  margin: 0;
  font-size: clamp(5rem, 10vw, 9rem);
  font-weight: 700;
  line-height: 0.8;
}

.paren-right {
  top: 10px;
  right: 36px;
}

.paren-left {
  left: 36px;
  bottom: 55px;
}

.mini {
  position: absolute;
  margin: 0;
  font-size: 1.3rem;
  line-height: 1.04;
  font-weight: 400;
}

.mini-right {
  top: 125px;
  right: 240px;
  text-align: left;
}

.mini-left {
  top: 285px;
  left: 240px;
  text-align: left;
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
  .thank-section {
    min-height: auto;
    display: grid;
    gap: 18px;
    padding: 28px 22px 34px;
  }

  .thank-inner {
    min-height: auto;
    top: 0;
  }

  .thank-word,
  .you-word,
  .paren,
  .mini {
    position: static;
  }

  .thank-word,
  .you-word {
    font-size: clamp(3rem, 16vw, 5rem);
  }

  .paren {
    font-size: clamp(2.4rem, 10vw, 4rem);
  }

  .mini {
    font-size: 1rem;
    line-height: 1.15;
  }

  .paren-right {
    justify-self: end;
  }

  .you-word {
    justify-self: end;
  }
}

@media (max-width: 640px) {
  .contact-copy {
    font-size: 1.08rem;
  }

  .contact-links a {
    font-size: 0.85rem;
  }
}


</style>

