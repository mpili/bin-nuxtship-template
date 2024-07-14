<script setup>

import { ref } from 'vue';

const immagini = [
  { src: "/img/sections/formazione.jpg", },
  { src: "/img/sections/mappe.jpg", },
];
const indice = ref(1);

const next = () => {
  if (indice.value === 0) {
    indice.value = 1;
  } else {
    indice.value = 0;
  }
};

</script>
<template>
  <p>
    Eccomi sono il componente slide
    <img :src="immagini[indice].src" />
    <button @click="next()">prossimo</button>
  </p>
</template>
