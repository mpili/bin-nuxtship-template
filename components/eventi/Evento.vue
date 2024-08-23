<script setup>
const props = defineProps(["evento"]);

const breadcrumb = computed(() => [
  {
    label: "eventi",
    path: "/eventi",
  },
  {
    label: props.evento.titolo,
  },
]);

useHead({
  title: props.evento.titolo + " | Bitcoin Italia Network",
});


</script>

<template>
  <LandingSectionhead>
    <template v-slot:title>{{ evento.titolo }}</template>
  </LandingSectionhead>
  <LandingBreadcrumb :voci="breadcrumb" />

  <div class="py-4" v-if="evento.descrizione">
    {{ evento.descrizione }}
  </div>
  
  <EventiVenue v-if="evento.id_nod_osm" :idnodosm="evento.id_nod_osm" />
  <EventiComunita  v-if="evento.id_comunita" :idcomunita="evento.id_comunita" />

</template>