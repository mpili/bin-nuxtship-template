<script setup>
const props = defineProps(["meetup"]);

const breadcrumb = computed(() => [
  {
    label: "comunità",
    path: "/comunita",
  },
  {
    label: "meetup",
    path: "/meetups",
  },
  {
    label: props.meetup.nome,
  },
]);

useHead({
  title: props?.meetup.nome + " | Bitcoin Italia Network",
  link: [
    {
      rel: "canonical",
      href: `https://bitcoinitalianetwork.com/meetup/${props?.meetup?.idmeetup}`,
    },
  ],
});

</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>{{ props.meetup.nome }}</template>
    </LandingSectionhead>
    <LandingBreadcrumb :voci="breadcrumb" />

    <EventiBb v-if="props.meetup.idmeetup=='bitcoinbeer'" />

    <div v-if="meetup.descrizione">
      <div v-html="meetup.descrizione" class="pt-4"></div>
    </div>
    <div class="flex flex-wrap gap-4 mt-4">
      <OsnTagwebsite :url="meetup.website" />
    </div>
  </LandingContainer>
</template>
