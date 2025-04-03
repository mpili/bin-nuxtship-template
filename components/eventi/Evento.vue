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
  title: props?.evento?.titolo + " | Bitcoin Italia Network",
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
    <template v-slot:title>{{ evento?.titolo }}</template>
  </LandingSectionhead>
  <LandingBreadcrumb :voci="breadcrumb" />

  <div class="my-4">
    <UiEvent
    :event="{
      date: evento?.data,
      title: evento?.titolo,
      image: evento.img ? 
      'https://bin-dev.pockethost.io/api/files/eventi/' + evento.id +'/' +evento.img
      : '',
      description: evento?.descrizionex,
      location: evento?.location,
      city: evento?.city
    }"
    />
  </div>

  <MeetupBadge v-if="evento?.id_comunita" :idcomunita="evento?.id_comunita" />

  <EventiVenue v-if="evento?.id_nod_osm" :idnodosm="evento?.id_nod_osm" />
  <EventiVenueway v-if="evento?.id_way_osm" :idwayosm="evento?.id_way_osm" />
</template>
