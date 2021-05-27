<template>
  <div>
    <section>
      <div class="container-imagen">
        <hero-imagen :imgUrl="imagen">
          <template v-slot:titulo>
            <span>Bienvenido a OrizonMobile</span>
          </template>
          <template v-slot:sub-titulo>
            <span>Descubre lo que tenemos para ti</span>
          </template>
          <template v-slot:text-button>
            <span>Mas información</span>
          </template>
        </hero-imagen>
      </div>
    </section>
  </div>
</template>

<script>
import HeroImagen from "../components/HeroHelpPage/HeroImagenComponent";
import imglogo from "../assets/imagenes/student-849825_1920.jpg";
import { ref } from "vue";
export default {
  components: {
    HeroImagen,
  },
  setup() {
    const imagen = ref(imglogo);

    return { imagen };
  },
};
</script>

<style lang="less">
.container-imagen button:hover {
  background-color: #d1dbbd;
}

.container-imagen button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #91aa9d;
  text-align: center;
  cursor: pointer;
  width: 45%;
  font-size: 13px;
  border-bottom: solid #d1dbbd 4px;
}
</style>
