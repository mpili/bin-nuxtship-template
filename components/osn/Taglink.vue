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
};
</script>

<template>
  <NuxtLink v-if="tag" :to="`/ost/${tag}/${valore}`">
    <slot name="testo"></slot>
  </NuxtLink>
</template>
