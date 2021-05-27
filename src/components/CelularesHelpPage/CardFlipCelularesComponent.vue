<template>
  <div class="card-flip-container">
    <div
      v-for="(Celulares, key) of CelularesItems"
      :key="key"
      class="flip-card"
    >
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            :src="Celulares.img"
            alt="Avatar"
            style="width: 100%; height: 232px; margin-top: 34px"
          />
        </div>
        <div class="flip-card-back">
          <h1>
            <b>{{ Celulares.titulo }}</b>
          </h1>
          <p>
            {{ Celulares.texto }}
          </p>
          <p>We love that guy</p>
        </div>
      </div>
      <p>
        <button class="buttones-celulares" onclick="iraComprar('1')">
          {{ Celulares.texto_boton }}
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Img1 from "@/assets/imagenes/celulares/Celular-Nokia.png";
import Img2 from "@/assets/imagenes/celulares/Celular-apple.png";
import Img3 from "@/assets/imagenes/celulares/Celular-Samsung.png";
import Img4 from "@/assets/imagenes/celulares/Celular-Lanix.png";
import Img5 from "@/assets/imagenes/celulares/Celular-Alcatel.png";
import Img6 from "@/assets/imagenes/celulares/Celular-Huawei.png";
import Img7 from "@/assets/imagenes/celulares/Celular-Lg.png";
import Img8 from "@/assets/imagenes/celulares/Celular-Motorola.png";
export default {
  setup() {
    const CelularesItems = [
      {
        titulo: "NOKIA",
        texto: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum
            excepturi odio minus explicabo, dolor maxime hic nam? Eligendi, ab
            eveniet expedita at iure voluptatum quasi dolorum asperiores quae
            officiis?`,
        texto_boton: "COMPRAR",
        to: "telefonia",
        img: ref(Img1).value,
      },
      {
        titulo: "NOKIA",
        texto: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum
            excepturi odio minus explicabo, dolor maxime hic nam? Eligendi, ab
            eveniet expedita at iure voluptatum quasi dolorum asperiores quae
            officiis?`,
        texto_boton: "COMPRAR",
        to: "telefonia",
       img: ref(Img2).value,
      },
      {
        titulo: "NOKIA",
        texto: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum
            excepturi odio minus explicabo, dolor maxime hic nam? Eligendi, ab
            eveniet expedita at iure voluptatum quasi dolorum asperiores quae
            officiis?`,
        texto_boton: "COMPRAR",
        to: "telefonia",
       img: ref(Img3).value,
      },
      {
        titulo: "NOKIA",
        texto: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum
            excepturi odio minus explicabo, dolor maxime hic nam? Eligendi, ab
            eveniet expedita at iure voluptatum quasi dolorum asperiores quae
            officiis?`,
        texto_boton: "COMPRAR",
        to: "telefonia",
        img: ref(Img4).value,
      },
      {
        titulo: "NOKIA",
        texto: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum
            excepturi odio minus explicabo, dolor maxime hic nam? Eligendi, ab
            eveniet expedita at iure voluptatum quasi dolorum asperiores quae
            officiis?`,
        texto_boton: "COMPRAR",
        to: "telefonia",
        img: ref(Img5).value,
      },
      {
        titulo: "NOKIA",
        texto: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum
            excepturi odio minus explicabo, dolor maxime hic nam? Eligendi, ab
            eveniet expedita at iure voluptatum quasi dolorum asperiores quae
            officiis?`,
        texto_boton: "COMPRAR",
        to: "telefonia",
        img: ref(Img6).value,
      },
      {
        titulo: "NOKIA",
        texto: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum
            excepturi odio minus explicabo, dolor maxime hic nam? Eligendi, ab
            eveniet expedita at iure voluptatum quasi dolorum asperiores quae
            officiis?`,
        texto_boton: "COMPRAR",
        to: "telefonia",
        img: ref(Img7).value,
      },
      {
        titulo: "NOKIA",
        texto: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum
            excepturi odio minus explicabo, dolor maxime hic nam? Eligendi, ab
            eveniet expedita at iure voluptatum quasi dolorum asperiores quae
            officiis?`,
        texto_boton: "COMPRAR",
        to: "telefonia",
        img: ref(Img8).value,
      },
    ];

    return { CelularesItems, Img1 };
  },
};
</script>

<style lang="less">
/* Tabla de precios de los productos */

.card-flip-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  width: 100%;
  height: auto;
  padding-bottom: 39px;
}

.flip-card {
  background-color: transparent;
  width: auto;
  height: 300px;
  perspective: 1000px;
  padding: 34px 20px;
  clear: both;
  display: table-cell;
  flex-basis: 22%;
  flex-grow: 2;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card .flip-card-inner:hover {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: white;
  color: black;
  border: 2px thick white;
}

.flip-card-back {
  background-color: rgba(62, 96, 111, 0.5);
  color: white;
  transform: rotateY(180deg);
  padding: 12px;
  border: solid #fcfff5 6px;
  width: auto;
  height: 270px;
}

.buttones-celulares {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #91aa9d;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.buttones-celulares:hover {
  background-color: #d1dbbd;
}

@media (min-width: 320px) and (max-width: 480px) {
  .card-flip-container {
    flex-direction: column;
  }

  .flip-card {
    width: 320px;
    height: 300px;
    margin-left: 14px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 300px;
  }

  .flip-card-front,
  .flip-card-back {
    height: 15pc;
  }
}
</style>
