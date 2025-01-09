<script setup>
const props = defineProps(["tags"]);
</script>
<template>
  <OnwTag
    v-if="tags?.email"
    icona="material-symbols:alternate-email"
    etichetta="email"
    :testo="tags?.email"
  />
  <OnwTag
    v-if="tags['contact:email']"
    icona="material-symbols:mail-outline-sharp"
    etichetta="email"
    :testo="tags['contact:email']"
  />
</template>