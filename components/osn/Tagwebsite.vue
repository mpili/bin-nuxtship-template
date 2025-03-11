<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  computed: {
    formattedUrl() {
      if (!this.url) return '';
      if (this.url.startsWith('http://') || this.url.startsWith('https://')) {
        return this.url;
      }
      return `https://${this.url}`;
    },
  },
};
</script>

<template>
  <div v-if="url">
    <a :href="formattedUrl" target="_blank" rel="noopener">
      <MainBadge icona="mdi:web" testo="Visita il sito Web" />
    </a>
  </div>
</template>
