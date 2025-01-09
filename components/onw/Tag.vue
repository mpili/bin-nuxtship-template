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
    testo: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div v-if="testo">
    <UiTag :etichetta="etichetta">
      <template #icona>
        <Icon v-if="icona" :name="icona" size="16" color="gray" />
      </template>
      <template #contenuto>{{ testo }}</template>
    </UiTag>
  </div>
</template>
