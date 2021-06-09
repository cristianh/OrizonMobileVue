<template>
  <div>
    <section>
      <div class="container-imagen">
        <hero-imagen :imgUrl="ImagenHero" :ColorBoton="ColorBoton" :AlineacionTexto="AlineacionTexto" :MostrarBoton="MostrarBoton">
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
    ColorBoton:{
       type: String,
      default: "#91aa9d",
    },
    AlineacionTexto:{
      type: String,
      validator: function (value) {
        return ["center", "left", "right"].indexOf(value) !== -1;
      },
      default:"left"
    },
    MostrarBoton: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    HeroImagen,
  }
};
</script>

<style scope>
.container-image{
  width: 100%;
}

.container-imagen button:hover {
  background-color: #d1dbbd;
}

.container-imagen button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  text-align: center;
  cursor: pointer;
  width: 45%;
  font-size: 13px;
  border-bottom: solid #d1dbbd 4px;
}
</style>
