<script setup>
import { computed } from "vue";

const props = defineProps({
  ids: {
    type: Array,
    required: true,
  },
});

const osn_tipo = "node"; // "nwr";
const area_id = 3600365331; // id dell'area di ricerca

const idsString = computed(() => {
  return props.ids.join(",");
});

const url_api = computed(() => {
  if (!idsString.value) {
    return null; // Nessun ID, nessuna query
  }
  return `https://overpass-api.de/api/interpreter?data=[out:json][timeout:25];area(id:${area_id})->.searchArea;node(id:${idsString.value})(area.searchArea);out meta;`;
});

/* This call will only be performed on the client */
const { pending, data, error, execute } = useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

function fetchNodes() {
  if (url_api.value) {
    execute();
  }
}
</script>

<template>
  <div v-if="pending"><UiSkeleton /></div>
  <div v-if="error">Error: {{ error.message }}</div>
  <div v-if="data" class="bg-base-300 rounded rounded p-4">

    <h2 class="text-2xl lg:text-2xl font-bold lg:tracking-tight mb-4">
      In primo piano
    </h2>
    <div class="flex overflow-x-scroll pb-4 hide-scroll-bar">
      <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
        <div v-for="node in data.elements" class="inline-block px-2">
          <OnwCard :data="node" />
        </div>
      </div>
    </div>
  </div>
</template>