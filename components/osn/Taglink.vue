<script>
export default {
  props: {
    tag: {
      type: String,
      required: false,
    },
    valore: {
      type: String,
      required: true,
    },
  },
  computed: {
    // Verifica se una stringa contiene caratteri non alfanumerici
    needsQuotes() {
      return {
        tag: this.tag && !/^[a-zA-Z0-9_-]+$/.test(this.tag),
        value: this.valore && !/^[a-zA-Z0-9_-]+$/.test(this.valore)
      };
    },
    // Costruisce il path formattato correttamente
    formattedPath() {
      const formattedTag = this.needsQuotes.tag ? `"${this.tag}"` : this.tag;
      const formattedValue = this.needsQuotes.value ? `"${this.valore}"` : this.valore;
      return `/ost/${formattedTag}/${formattedValue}`;
    }
  }
};
</script>

<template>
  <NuxtLink v-if="tag" :to="formattedPath">
    <slot name="testo"></slot>
  </NuxtLink>
</template>
