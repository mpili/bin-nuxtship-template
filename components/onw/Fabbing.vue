<script setup>
const props = defineProps(["dbpending", "dbdata"]);
</script>
<template>
  <OnwFabutton
    v-if="!dbpending && dbdata?.items[0]?.bing"
    :url="dbdata?.items[0]?.bing"
    icon="logos:bing"
    tooltip="bing maps"
  />
</template>
