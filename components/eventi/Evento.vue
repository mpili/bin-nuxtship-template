<script setup>
const props = defineProps(["evento"]);

const breadcrumb = computed(() => [
  {
    label: "eventi",
    path: "/eventi",
  },
  {
    label: props.evento.descrizione,
  },
]);
</script>

<template>
  <LandingSectionhead>
    <template v-slot:title>{{ evento.titolo }}</template>
    <template v-slot:desc>{{ evento.descrizione }}</template>
  </LandingSectionhead>
  <LandingBreadcrumb :voci="breadcrumb" />

  <EventiVenue v-if="evento.id_nod_osm" :idnodosm="evento.id_nod_osm" />
  <EventiComunita  v-if="evento.id_comunita" :idcomunita="evento.id_comunita" />

</template>