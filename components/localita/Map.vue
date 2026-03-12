<script setup>
import { computed } from 'vue';

const props = defineProps(["data"]);

const hasCoords = computed(() =>
  props.data && typeof props.data.lat === 'number' && typeof props.data.lng === 'number'
);

const centerCoords = computed(() => [props.data?.lng || 0, props.data?.lat || 0]);

const poiList = computed(() => (Array.isArray(props.data?.poi) ? props.data.poi : []));
</script>
<template>
  <div class="md:w-full">
    <LMap
      v-if="hasCoords"
      style="height: 300px"
      :zoom="9"
      :center="centerCoords"
      :use-global-leaflet="false"
    >
      <MainLTileLayer />

      <ComunitaPoimarker v-for="poi of poiList" :key="poi.id || poi.name" :poi="poi" />
    </LMap>
    <div v-else class="text-center p-4 text-sm text-base-content/70">
      Posizione mappa non disponibile.
    </div>
  </div>
</template>
