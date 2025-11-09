<script setup>
const props = defineProps(["dbpending", "dbdata"]);
</script>
<template>
  <OnwFabutton
    v-if="!dbpending && dbdata?.items[0]?.gmap"
    :url="dbdata?.items[0]?.gmap"
    icon="logos:google-maps"
    tooltip="google maps"
  />
</template>
