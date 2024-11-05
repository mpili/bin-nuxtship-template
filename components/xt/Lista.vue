<script setup>
const props = defineProps(["pois"]);
// poi.id_nod_osm

// Estrae gli ID dei nodi OSM dai POI e li unisce in una stringa separata da virgole
const nodeIds = props.pois.map(poi => poi.id_nod_osm).join(',');


// const url_api = `https://overpass-api.de/api/interpreter?data=[out:json];node(id:11975350708,10275711660,524948400,10250750356,6795519406);out;`;
// Costruisce l'URL dell'API usando gli ID estratti
const url_api = `https://overpass-api.de/api/interpreter?data=[out:json];node(id:${nodeIds});out;`;


const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});
</script>
<template>
  <LandingContainer>
    <div v-if="pending">
      <span class="text-gray-400">...</span>
    </div>
    <div v-else>
      <OstMap :pois="data.elements" />
    </div>

    <div v-for="poi in data.elements">
      <OsnLinelink :poi="poi" />
    </div>
  </LandingContainer>
</template>
