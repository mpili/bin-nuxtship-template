<script setup>
const props = defineProps(["data"]);
</script>
<template>
  <div class="md:w-full">
    <LMap
      style="height: 300px"
      :zoom="9"
      :center="[data.lng, data.lat]"
      :use-global-leaflet="false"
    >
      <MainLTileLayer />

      <ComunitaPoimarker v-for="poi of data.poi" :poi="poi" />
    </LMap>
  </div>
</template>
