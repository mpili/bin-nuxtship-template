<script setup>
defineProps(["tags"]);
</script>
<template>
  <span>
    <span v-if="tags['addr:city']" itemprop="addressLocality">
      {{ tags["addr:city"] }}
    </span>
    <span v-else-if="tags['contact:city']" itemprop="addressLocality">
      {{ tags["contact:city"] }}
    </span>
  </span>
</template>
