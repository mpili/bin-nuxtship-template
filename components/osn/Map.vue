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
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
      />
      <LMarker :lat-lng="[data.lat, data.lon]" >
        <LPopup v-if="data?.tags?.name">{{data.tags.name}}</LPopup>
      </LMarker>
    </LMap>
    
  </div>
</template>