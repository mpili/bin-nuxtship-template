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
        <LPopup>{{useTagsname(data.tags)}}</LPopup>
      </LMarker>
    </LMap>
    
  </div>
</template>