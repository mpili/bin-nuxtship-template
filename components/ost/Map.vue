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
    <LTileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      layer-type="base"
      name="OpenStreetMap"
    />
    <ComunitaPoimarker v-for="poi of pois" :poi="poi" />
  </LMap>
</template>
