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
      <LandingBadge icona="mdi:web" testo="Visita il sito Web" coloreicona="#0ac18e" />
    </a>
  </div>
</template>
