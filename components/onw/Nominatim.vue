<script setup>
const props = defineProps(["lat", "lon", "dataosm"]);
const tags = props.dataosm?.tags;
const url_api = `https://nominatim.openstreetmap.org/reverse?lat=${props.lat}&lon=${props.lon}&format=json&addressdetails=1&accept-language=it`;
const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});
const isDev = process.dev
</script>
<template>
  <div v-if="pending">
    <UiSkeletonlines />
  </div>
  <div v-else>
    <OnwPosizione v-if="data?.address" :address="data.address" :tags="tags" />

    <OnwEdit
      v-if="isDev"
      :dataosm="dataosm"
      :lat="lat"
      :lon="lon"
      :datanomninatim="data"
      :tags="tags"
    />

    <!-- <div class="font-mono text-xs m-8">{{ url_api }}</div> -->

    <!-- <UiRivela title="dati" :description="data" /> -->
  </div>
  <MainRivelaerror :error="error" />
</template>
