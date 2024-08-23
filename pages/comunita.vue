<script setup>
useHead({
  title: "Comunità | Bitcoin Italia Network",
});

definePageMeta({
  layout: "landing",
});
import { ref } from "vue";
const zoom = ref(6);
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Comunità Bitcoin in Italia</template>
      <template v-slot:desc
        >Le comunità di Bitcoiner sul territorio italiano.</template
      >
    </LandingSectionhead>

    <LandingMainimg urlimg="/img/features/comunita.jpg" />

    <LMap
      style="height: 400px"
      :zoom="5"
      :center="[41.8879, 12.4838]"
      :use-global-leaflet="false"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
      />
      <LocalitaLmapoislocalita />
    </LMap>
  </LandingContainer>
</template>