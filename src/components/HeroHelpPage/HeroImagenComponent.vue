<template>
  <div>
    <div class="hero-imagen" :style="styleObject">
      <div class="hero-text-left">
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
        <button class="button animated fadeIn delay-3s">
          <slot name="text-button">
            <span>texto-boton</span>
          </slot>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    imgUrl: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const styleObject = ref({
      backgroundImage:
        'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("' +
        props.imgUrl +
        '")',
    });

    return { styleObject };
  },
};
</script>

<style lang="less">
.hero-imagen {
  border: white solid 3px;
  width: 100%;
  height: 29pc;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.hero-text-left {
  text-align: left;
  position: absolute;
  top: 50%;
  left: 24%;
  transform: translate(-50%, -50%);
  color: white;
}

.hero-text-left span {
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
  }

  .titulo-texto {
    font-size: 2em;
  }
}
</style>
