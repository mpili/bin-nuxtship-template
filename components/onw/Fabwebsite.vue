<script setup>
const props = defineProps(["oppending", "opdata"]);
</script>
<template>
  <OnwFabutton
    v-if="!oppending && useTagswebsite(opdata.elements[0].tags)"
    :url="opdata.elements[0].tags['website']"
    icon="streamline-freehand-color:worldwide-web-network-www"
    tooltip="sito web"
  />
</template>
