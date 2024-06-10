<script setup>
definePageMeta({
  layout: "landing",
});
import { ref } from 'vue'
const zoom = ref(6)
</script>

<template>
	<LandingSectionhead>
		<template v-slot:title>Comunità Bitcoin in Italia</template>
		<template v-slot:desc>Le comunità di Bitcoiner sul territorio italiano.</template>
	</LandingSectionhead>

	<LMap
	  style="height: 400px"
	  :zoom="5"
	  :center="[41.8879, 12.4838]"
	  :use-global-leaflet="false"
	>
	  <LTileLayer
		url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
		layer-type="base"
		name="OpenStreetMap"
	  />
		<LandingLmapois/>
	</LMap>
  </template>