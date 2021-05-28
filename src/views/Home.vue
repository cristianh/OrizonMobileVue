<template>
  <div class="home">
    <Hero :ImagenHero="imagenHero" TextoTitulo="Bienvenido a OrizonMobile" TextoSubTitulo="Descubre lo que tenemos para ti" TextoBoton="Mas información"/>
    <Productos />
    <Celulares />
    <BannerInfo /> 
    <TablaPlanes /> 
  </div>
</template>

<script>
import { ref } from "vue"; 
export default {
  name: "Home",
   setup() {
    const imagenHero = ref(require("@/assets/imagenes/student-849825_1920.jpg"));
    return { imagenHero };
  },
};
</script>

