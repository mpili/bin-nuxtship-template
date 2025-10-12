<script setup>
defineProps(["data"]);
</script>

<template>
    <LMap
      style="height: 300px"
      :zoom="6"
      :center="[usePoiLat(data.elements[0]), usePoiLon(data.elements[0])]"
      :use-global-leaflet="false"
    >
      <MainLTileLayer />
      <RegionePoimarker v-for="poi of data.elements" :poi="poi" />
    </LMap>	
	<!-- <UiRivela title="dati" :description="data.elements"  /> -->
</template>
