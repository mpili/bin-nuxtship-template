<script setup>
const props = defineProps(["data"]);
</script>
<template>
  <RegioneBreadcrumb :data="data" />

  <LandingSectionhead>
    <template v-slot:title>{{ data.name }}</template>
    <template v-slot:desc>Province della regione</template>
  </LandingSectionhead>
  <RegioneEventi :regione="data.slug" />

  <RegioneHeadimg :id="data.id" />
</template>
