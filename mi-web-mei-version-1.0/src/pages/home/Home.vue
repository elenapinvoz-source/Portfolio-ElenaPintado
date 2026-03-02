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
        <span>DISEÑADORA GRÁFICA</span>
        <span>FOTOGRÁFA</span>
        <span>ILUSTRADORA</span>
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
  margin-top: -230px;
  margin-left: -100px;
  }

.name-pill {
  position: absolute;
  margin-top: 50px;          /* baja/sube */
  margin-left: 0px;       /* mueve izquierda/derecha */
  background: #d9f227;
  color: #111;
  border-radius: 9999px;
  padding: 1rem 2.6rem;   /* más pequeño */
  font-size: 2rem;         /* más pequeño */
  font-weight: 300;
  line-height: 1;
  text-decoration: none;
}

.name-pill:hover {
  filter: brightness(1.03);
}

.home-roles {
  position: absolute;
  left: 60px;
  right: 60px;
  bottom: 40px;
  display: flex;
  justify-content: space-between;
  color: #5049a9;
  font-size: 1.6rem;
  font-weight: 300;
  transition: color 0.2s ease;
  cursor: pointer;
}

.home-roles span:hover {
  color: #d9f227; /* verde lima */
}


</style>




