<template>
  <div>
    <div class="container-Infoimagen" :style="[styleObject]">
      <div class="content-textimagen" :style="[styleTextoBannerInfo]">
        <slot name="titulo-bannerInfo">
            <h1>titulo banner</h1>
        </slot>
         <slot name="texto-bannerInfo">
        <p>
         texto banner
        </p>
         </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    ImagenBanner: {
      type: String,
      default: "@/assets/imagenes/city-3213676_1920.jpg",
    },
    ImagenSizeWidth: {
      type: String,
      default: "100%",
    },
    ImagenSizeHeight: {
      type: String,
      default: "320px",
    },
    alignTexto: {
      type: String,
      default: "left",
    },
  },
  setup(props) {
    const textAlign = ref(props.alignTexto);
    const styleTextoBannerInfo = ref({
      textAlign,
    });
    const styleObject = ref({
      width: props.ImagenSizeWidth,
      height: props.ImagenSizeHeight,
      backgroundPosition: "center",
      backgroundImage: ' url("' + props.ImagenBanner + '")',
    });

    return { styleTextoBannerInfo, styleObject };
  },
};
</script>

<style lang="less">
.container-Infoimagen {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  max-width: 100%;
  margin: 0 auto;
  pointer-events: none;
  position: relative;
}

.container-Infoimagen img {
  vertical-align: middle;
}

.container-Infoimagen .content-textimagen {
  position: absolute;
  bottom: 0;
  background: #91aa9d;
  background: rgba(62, 96, 111, 0.7);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
  margin-left: 37px;
}


@media (min-width: 320px) and (max-width: 480px) {
 .container-Infoimagen {
   height:260px !important;
   background-size: cover;
 }
 
 .container-Infoimagen .content-textimagen {
    padding: 20px;
    margin-left: 0px;
    width: 296px;
}

}

</style>