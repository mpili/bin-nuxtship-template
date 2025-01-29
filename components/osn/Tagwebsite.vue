<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div v-if="url">
    <a :href="url" target="_blank" rel="noopener">
      <MainBadge icona="mdi:web" testo="Visita il sito Web" />
    </a>
  </div>
</template>
