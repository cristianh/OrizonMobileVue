<template>
  <div>
    <section>
      <hr style="width: 34%" />
      <h1 class="title-price">Celulares</h1>
      <hr style="width: 34%" />
      <p style="text-align: center">Todos a la medida de tus necesidades</p>
      <br />
      <!-- Fila 1 -->
      <card-flip/>
      
    </section>
  </div>
</template>

<script>
import CardFlip from "../components/CelularesHelpPage/CardFlipCelularesComponent";
export default {
  components: {
    CardFlip,
  },
  setup() {},
};
</script>

<style lang="less">
/* Tabla de precios de los productos */

.title-price {
  font-size: 32px;
  text-align: center;
}
</style>
