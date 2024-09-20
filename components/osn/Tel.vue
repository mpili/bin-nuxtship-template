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
  <div v-if="telefono" itemscope itemtype="https://schema.org/ContactPoint">
    <a :href="'tel:'+telefono" target="_blank" rel="noreferrer">
      <span itemprop="telephone">
        <OsnTag :icona="icona" :etichetta="etichetta" :testo="telefono" />
      </span>
    </a>
  </div>
</template>
