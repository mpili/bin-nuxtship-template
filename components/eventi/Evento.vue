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
  link: [
    {
      rel: "canonical",
      href: `https://bitcoinitalianetwork.com/evento/${props?.evento?.id}`,
    },
  ],
});


</script>

<template>
  <LandingSectionhead>
    <template v-slot:title>{{ evento.titolo }}</template>
  </LandingSectionhead>
  <LandingBreadcrumb :voci="breadcrumb" />


  <div class="py-4" v-if="evento.descrizionex">
    <div v-html="evento.descrizionex"></div>
  </div>
  <div v-else-if="evento.descrizione" class="py-4">
    {{ evento.descrizione }}
  </div>
  <MeetupBadge v-if="evento.id_comunita" :idcomunita="evento.id_comunita" />
  
  <EventiVenue v-if="evento.id_nod_osm" :idnodosm="evento.id_nod_osm" />

  <div class="max-w-sm">
    <img v-if="evento.img"
        class="rounded-md mt-2"
        :src="
          'https://bin-dev.pockethost.io/api/files/eventi/' +
          evento.id +
          '/' +
          evento.img
        "
      />
  </div>


</template>