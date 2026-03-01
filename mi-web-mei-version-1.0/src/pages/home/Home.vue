<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="poster-wrapper">
    <img
      class="hero-img"
      src="/imagenes/Home/EPV TITU.png"
      alt="Portfolio"
    />

   <RouterLink to="/sobremi" class="name-pill">
      ELENA PINTADO
    </RouterLink>

    <div class="home-roles">
        <span>Diseñadora gráfica</span>
        <span>Fotógrafa</span>
        <span>Ilustradora</span>
    </div>

  </section>
</template>

<style scoped>
.poster-wrapper {
  min-height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.hero-img {
  width: 1600px;
  max-width: none;
  height: auto;
  margin-top: -200px;
  margin-left: -100px;
  }

.name-pill {
  position: absolute;
  margin-top: 40px;          /* baja/sube */
  margin-left: 0px;       /* mueve izquierda/derecha */
  background: #d9f227;
  color: #111;
  border-radius: 9999px;
  padding: 1rem 2.6rem;   /* más pequeño */
  font-size: 2rem;         /* más pequeño */
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
}

.name-pill:hover {
  transform: translateX(-50%) scale(1.03);
  filter: brightness(1.03);
}

.home-roles {
  position: absolute;
  left: 60px;
  right: 60px;
  bottom: 80px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 1.05rem;
  font-weight: 500;
}


</style>




