<template>
  <div>
    <section>
      <div class="container-imagen">
        <hero-imagen :imgUrl="ImagenHero">
          <template v-slot:titulo>
            <span>{{TextoTitulo}}</span>
          </template>
          <template v-slot:sub-titulo>
            <span>{{TextoSubTitulo}}</span>
          </template>
          <template v-slot:text-button>
            <span>{{TextoBoton}}</span>
          </template>
        </hero-imagen>
      </div>
    </section>
  </div>
</template>

<script>
import HeroImagen from "../components/HeroHelpPage/HeroImagenComponent";
export default {
  props: {
    ImagenHero: {
      type: String,
      default: "",
    },
    TextoTitulo: {
      type: String,
      default: "",
    },
    TextoSubTitulo: {
      type: String,
      default: "",
    },
    TextoBoton: {
      type: String,
      default: "",
    },
  },
  components: {
    HeroImagen,
  }
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
