<script lang="ts" setup>
</script>

<template>
  <section class="poster-wrapper">
    <div class="poster">
      <h1 class="titulo-portafolio" aria-label="PORTAFOLIO">
        <span>PORTA</span>
        <span>FOLIO</span>
      </h1>

      <p class="intro-text">
        <span>ELENA PINTADO</span>
        <span>DISEÑADORA GRÁFICA</span>
      </p>


    </div>
  </section>
</template>

<style scoped>
.poster-wrapper {
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.poster {
  position: relative;
  overflow: hidden;
  background: #000;
  min-height: 100vh;
  padding: clamp(0.6rem, 1.6vw, 1.4rem);
}

.titulo-portafolio {
  font-size: clamp(9rem, 33vw, 30rem); /* mas grande */
  line-height: 1;                      /* mas junto entre lineas */
  letter-spacing: -0.02em;                /* letras un poco mas compactas */
  justify-content: center;                /* quita separacion vertical extrema */
  gap: 0.28em;                            /* separacion controlada entre PORTA/FOLIO */
}

.titulo-portafolio span {
  display: block;
}

.intro-text {
  position: absolute;
  left: clamp(1rem, 7vw, 4rem);
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.12em;

  font-size: clamp(2rem, 5.6vw, 5.2rem);
  line-height: 0.86;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  color: #d9f227;

  z-index: 2;
}

.intro-text span {
  display: block;
}



</style>



