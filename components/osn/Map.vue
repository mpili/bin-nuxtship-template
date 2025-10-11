<script setup>
defineProps(["data"]);
</script>

<template>
  <div class="py-2">
    <LMap
      style="height: 250px"
      :zoom="18"
      :center="[data.lat, data.lon]"
      :use-global-leaflet="false"
    >
      <MainLTileLayer />
      <LMarker :lat-lng="[data.lat, data.lon]" >
        <LPopup v-if="data?.tags?.name">{{data.tags.name}}</LPopup>
      </LMarker>
    </LMap>
    
  </div>
</template>