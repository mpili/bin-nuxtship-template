<script setup>
const props = defineProps(["idnodosm"]);

const url_api = `https://bin-dev.pockethost.io/api/collections/attivita/records?filter=(id_nod_osm='${props.idnodosm}')`;

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});
</script>

<template>
  <div v-if="!pending" class="mt-8">
    <div v-if="data?.items[0]?.descrizione" v-html="data.items[0].descrizione"></div>
  </div>
</template>
