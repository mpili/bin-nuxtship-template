<script setup>
defineProps(["data"]);
</script>
<template>
  <LMap
    style="height: 300px mt-2"
    :zoom="8"
    :center="[usePoiLat(data.elements[0]), usePoiLon(data.elements[0])]"
    :use-global-leaflet="false"
  >
    <MainLTileLayer />
    <ProvinciaPoimarker v-for="poi of data.elements" :poi="poi" />
  </LMap>	
	<!-- <UiRivela title="dati" :description="data.elements"  /> -->
</template>
