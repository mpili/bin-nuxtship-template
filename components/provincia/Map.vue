<script setup>
defineProps(["data"]);
</script>

<template>
    <LMap
      style="height: 300px"
      :zoom="5"
      :center="[41.8879, 12.4838]"
      :use-global-leaflet="false"
    >
      <MainLTileLayer />
      <ProvinciaPoimarker v-for="poi of data.elements" :poi="poi" />
    </LMap>	
	<!-- <UiRivela title="dati" :description="data.elements"  /> -->
</template>
