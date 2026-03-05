<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="home-page">
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
  padding: 18px 26px 24px;
  display: flex;
  flex-direction: column;
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
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: start;
}

.roles {
  margin: 0;
  font-size: 1.45rem;
  line-height: 1.1;
  max-width: 270px;
}

.year {
  justify-self: center;
  font-size: 2rem;
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
  padding-top: 170px
}

.home-cta {
  text-align: center;
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
    grid-template-columns: 1fr;
    row-gap: 16px;
  }

  .year {
    justify-self: start;
  }
}
</style>
