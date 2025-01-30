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
    url: {
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
    <div class="flex items-center gap-1 pt-2">
      <Icon v-if="icona" :name="icona" size="16" color="gray" />
      <span class="text-base-300 text-sm">{{ etichetta }}&nbsp;</span>
    </div>
    <div class="text-primary font-bold pb-2">
      <NuxtLink :to="url">{{ testo }}</NuxtLink>
    </div>
  </div>
</template>
