<template>
  <div class="persona">
    <Hero :ImagenHero="imagenHero"  TextoTitulo="Pensando en lo que necesitas" TextoSubTitulo="Productos y sevicios pensados para ti" TextoBoton="Mas información"/>
    <TablaPlanes /> 
  </div>
</template>

<script>
import { ref } from "vue"; 
export default {
  name: "Persona",
    setup() {
    const imagenHero = ref(require("@/assets/imagenes/phone-869669_1920.jpg"));
    return { imagenHero };
  },
};
</script>
