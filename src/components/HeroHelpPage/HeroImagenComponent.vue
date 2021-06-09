<template>
  <div>
    <div class="hero-imagen" :style="styleObject">
      <div :class="classes" class="hero-text-content">
        <h2 class="titulo-texto animated bounceInLeft delay-3s">
          <slot name="titulo">
            <span>impedit sit aut</span>
          </slot>
        </h2>
        <h4 class="sub-titulo-texto animated fadeIn delay-4s">
          <slot name="sub-titulo">
            <span>sed porro ullam</span>
          </slot>
        </h4>
        <button v-if="botonVisible" @click="onClick" class="button animated fadeIn delay-3s" :style="styleBoton">
          <slot name="text-button">
            <span>texto-boton</span>
          </slot>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  props: {
    imgUrl: {
      type: String,
      default: "",
    },
    imgPocision: {
      type: String,
      default: "center",
    },
    ColorBoton: {
      type: String,
      default: "#91aa9d",
    },
    MostrarBoton: {
      type: Boolean,
      default: true,
    },
    AlineacionTexto: {
      type: String,
      default: "left",
    },
  },
  emits: ["click"],
  setup(props,{emit}) {
    const styleObject = ref({
      backgroundImage:
        'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("' +
        props.imgUrl +
        '")',
      backgroundPosition: props.imgPocision,
    });

    const styleBoton = ref({
      backgroundColor: props.ColorBoton,
      width: "200px",
    });

    const botonVisible= ref(props.MostrarBoton)

    

    return {
      botonVisible,
      classes: computed(() => ({
        "hero-text-left": props.AlineacionTexto == "left",
        "hero-text-center": props.AlineacionTexto == "center",
        "hero-text-right": props.AlineacionTexto == "right",
      })),
      styleObject,
      styleBoton,
      onClick(){
      emit("click");
    }
    };
  },
};
</script>

<style scope>
.hero-imagen {
  border: white solid 3px;
  width: 100%;
  height: 29pc;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-text-content {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 58%;
  transform: translate(-50%, -50%);
  color: white;
  width: 100%;
  word-break: break-all;
}

.hero-text-left {
  text-align: left;
}

.hero-text-left span {
  font-size: 1.3em;
}

.hero-text-right {
  text-align: right;
  left: 47%;
}

.hero-text-right span {
  font-size: 1.3em;
}

.hero-text-center {
  text-align: center;
  left: 50%;
}

.hero-text-center span {
  font-size: 1.3em;
}

.button:hover {
  background-color: #555;
}

@media (min-width: 320px) and (max-width: 480px) {
  .hero-text-left span {
    font-size: 1em;
  }

  .hero-text-left {
    top: 50%;
    left: 50%;
    text-align: center;
  }

  .container-imagen button {
    width: 80% !important;
  }

  .sub-titulo-texto {
    font-size: 1em;
    width: 100%;
  }

  .titulo-texto {
    font-size: 2em;
  }
}
</style>
