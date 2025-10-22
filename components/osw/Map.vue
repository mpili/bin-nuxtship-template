<script setup>
const props = defineProps(["idosm"]);

const url_api = `http://overpass-api.de/api/interpreter?data=[out:json];way(id:${props.idosm});node(w);out meta;`;

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});
</script>

<template>
  <div class="py-2">
    mappa
    <div v-if="pending">
      <span class="loading loading-spinner loading-xs"></span>
    </div>
    <div v-else>
      <div v-if="data?.elements">
        <!-- <p>{{ data.elements[0]?.lat }}, {{ data.elements[0]?.lon }}</p> -->
        <LMap
          style="height: 250px"
          :zoom="16"
          :center="[data?.elements[0]?.lat, data?.elements[0]?.lon]"
          :use-global-leaflet="false"
        >
          <MainLTileLayer />

          <LMarker :lat-lng="[data.elements[0].lat, data.elements[0].lon]">
              <LPopup>{{ useTagsname(data?.tags) }}</LPopup>
          </LMarker>

          <LPolygon
            :lat-lngs="data.elements.map((item) => [item.lat, item.lon])"
          />
        </LMap>
      </div>

      <!-- {{data?.elements}} -->
    </div>
  </div>
</template>
