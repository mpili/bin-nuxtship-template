<script setup>
const props = defineProps(["tags"]);
const citta = useTagsCitta(props.tags);
</script>
<template>
  <span v-if="citta" itemprop="addressLocality">
    {{ citta }}
  </span>
    <!-- <span v-if="tags['addr:city']" itemprop="addressLocality">
      {{ tags["addr:city"] }}
    </span>
    <span v-else-if="tags['contact:city']" itemprop="addressLocality">
      {{ tags["contact:city"] }}
    </span> -->
</template>
