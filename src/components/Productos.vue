<template>
  <div>
    <section>
      <productos-items :items="ProductosItems" alignTexto="left" />
    </section>
  </div>
</template>
<script>
import ProductosItems from "../components/ProductosHelpPage/ProductosItemsComponent";
import Img1 from "@/assets/imagenes/desk-3076954_1920.jpg";
import Img2 from "@/assets/imagenes/iphone-410324_1920.jpg";
import Img3 from "@/assets/imagenes/ipad-820272_1920.jpg";
import Img4 from "@/assets/imagenes/apple-1841553_1920.jpg";
import { ref } from "vue";
export default {
  components: {
    ProductosItems,
  },
  setup() {
    const ProductosItems = [
      {
        titulo: "Telefonia",
        texto: "Some text that describes me lorem ipsum ipsum lorem.",
        texto_boton: "Mas información",
        to: "telefonia",
        img: ref(Img1).value,
      },
      {
        titulo: "Internet",
        texto: "Some text that describes me lorem ipsum ipsum lorem.",
        texto_boton: "Mas información",
        to: "telefonia",
        img: ref(Img2).value,
      },
      {
        titulo: "Productos",
        texto: "Some text that describes me lorem ipsum ipsum lorem.",
        texto_boton: "Mas información",
        to: "telefonia",
        img: ref(Img3).value,
      },
      {
        titulo: "Servicios",
        texto: "Some text that describes me lorem ipsum ipsum lorem.",
        texto_boton: "Mas información",
        to: "telefonia",
        img: ref(Img4).value,
      },
    ];

    return { ProductosItems };
  },
};
</script>

<style lang="less">
.column-team {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 12px 8px;
}

.column-team-index {
  float: left;
  width: 25%;
  margin-bottom: 16px;
  padding: 12px 8px;
}
</style>
