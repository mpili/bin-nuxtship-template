<script>
export default {
  props: {
    icona: {
      type: String,
      required: false,
    },
    etichetta: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
    },
  },
};
</script>

<template>
  <div v-if="telefono">
    <a :href="'tel:'+telefono" target="_blank" rel="noreferrer">
      <OsnTag :icona="icona" :etichetta="etichetta" :testo="telefono" />
    </a>
  </div>
</template>
