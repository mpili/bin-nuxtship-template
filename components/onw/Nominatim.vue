<script setup>
const props = defineProps(["lat", "lon", "tags"]);
const url_api = `https://nominatim.openstreetmap.org/reverse?lat=${props.lat}&lon=${props.lon}&format=json&addressdetails=1&accept-language=it`;
const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});
</script>
<template>
  <div v-if="pending">
    <span></span>
  </div>
  <div v-else>
    <OnwPosizione v-if="data?.address" :address="data.address" :tags="tags" />

    <!-- <OnwNominatmancanti v-if="data?.address" :address="data.address" :tags="tags" /> -->
    <!-- <OnwNominatvalori v-if="data?.address" :address="data.address" /> -->

    <!-- <div class="font-mono text-xs m-8">{{ url_api }}</div> -->

    <!-- <UiRivela title="dati" :description="data" /> -->
  </div>
  <MainRivelaerror :error="error" />
</template>
