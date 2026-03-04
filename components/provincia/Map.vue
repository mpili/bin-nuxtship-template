<script setup>
defineProps(["data"]);
</script>
<template>
  <!-- <p>Numero comuni: {{data?.elements.length}}</p> -->
  <LMap
    v-if="data?.elements?.length > 0"
    style="height: 300px"
    :zoom="8"
    :center="[usePoiLat(data?.elements[0]), usePoiLon(data?.elements[0])]"
    :use-global-leaflet="false"
  >
    <MainLTileLayer />
    <ProvinciaPoimarker v-for="poi of data?.elements" :poi="poi" />
  </LMap>	
	<!-- <UiRivela title="dati" :description="data?.elements[0]"  /> -->
</template>
