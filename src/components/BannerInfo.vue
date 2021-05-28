<template>
  <div>
    <section>
      <banner-info :ImagenBanner="imagen" ImagenSizeHeight="370px">
        <template v-slot:titulo-bannerInfo>
          <h1>Telefonía fija: Planes nacionales e internacionales</h1>
        </template>
        <template v-slot:texto-bannerInfo>
          <p>
            Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
            phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum
            maiestatis persequeris pro, pri ponderum tractatos ei.
          </p>
        </template>
      </banner-info>
    </section>
  </div>
</template>

<script>
import BannerInfo from "../components/BannerInfoHelpPage/BannerInfoComponent";
import { ref } from "vue";
export default {
  components: {
    BannerInfo,
  },
  setup() {
    const imagen = ref(
      require("@/assets/imagenes/city-3213676_1920.jpg")
    );
    return { imagen };
  },
};
</script>