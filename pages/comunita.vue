<script setup>
useHead({
  title: "Comunità | Bitcoin Italia Network",
  link: [
    {
      rel: 'canonical',
      href: 'https://bitcoinitalianetwork.com/comunita',
    },
  ],
});

definePageMeta({
  layout: "main",
});
import { ref } from "vue";
const zoom = ref(6);
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Comunità Bitcoin locali</template>
      <template v-slot:desc
        >Connettiti con appassionati e professionisti.</template
      >
    </LandingSectionhead>

    <div class="pt-4">
      <LandingMainimg urlimg="/img/features/comunita.jpg" />
    </div>

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
    <ComunitaLocalitaLista />
  </LandingContainer>
</template>