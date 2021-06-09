<template>
     <button type="button" :class="{'activo':active}">
    {{ label }}
  </button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "boton-easy",
  props: {
    label: {
      type: String,
      required: true
    },
    active:{
        type:Boolean,
        default:false
    }
  },
};
</script>

<style>
.activo { 
    border:2px solid red;
}
</style>