<template>
  <div>
    <div class="row">
      <div
        v-for="(Item, key) of itemsPropductos"
        :key="key"
        class="column-team-index"
      >
        <div class="card" :style="[styleTextoCard]">
          <img :src="Item.img" alt="Jane" style="width: 100%" />
          <div class="container-info">
            <h2>{{ Item.titulo }}</h2>
            <p>{{ Item.texto }}</p>
            <span>orizonmobile@cayuda.com</span>
            <p>
              <button
                class="button"
                onclick="window.location.href = 'telefonia.html';"
              >
                {{ Item.texto_boton }}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
/* import img1 from "../assets/imagenes/desk-3076954_1920.jpg"; */
export default {
  props: {
    items: {
      type: Object,
      default: null,
    },
    alignTexto: {
      type: String,
      default: "center",
    },
  },
  setup(props) {
    const itemsPropductos = ref(props.items);
    const textAlign = ref(props.alignTexto);
    const styleTextoCard = ref({
      textAlign,
    });

    return {
      itemsPropductos,
      styleTextoCard,
    };
  },
};
</script>

<style lang="less">
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-content: stretch;
  align-items: flex-start;
  flex-basis: 1;
}

.column-team-index {
  float: left;
  width: 320px;
  margin-bottom: 16px;
  padding: 12px 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.container-info {
  padding: 0 16px;
}
.container-info span {
  word-break: break-all;
}

.container-info::after,
.row::after {
  content: "";
  clear: both;
  display: table;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #d1dbbd;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

@media (min-width: 320px) and (max-width: 480px) {
  .row {
    flex-direction: column;
    align-content: center;
    align-items: center;
  }

  .column-team-index {
    width: 320px !important;
  }
}
</style>
