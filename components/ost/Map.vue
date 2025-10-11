<script setup>
defineProps(["pois"]);
</script>

<template>
  <LMap
  style="height: 400px"
	  :zoom="5"
	  :center="[41.8879, 12.4838]"
	  :use-global-leaflet="false"
  >
    <MainLTileLayer />
    <ComunitaPoimarker v-for="poi of pois" :poi="poi" />
  </LMap>
</template>
