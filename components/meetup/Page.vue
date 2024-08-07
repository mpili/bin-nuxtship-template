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
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>{{ props.meetup.nome }}</template>
    </LandingSectionhead>
    <LandingBreadcrumb :voci="breadcrumb" />

    <div v-if="meetup.descrizione">
      <div v-html="meetup.descrizione" class="pt-4"></div>
    </div>
    <div class="flex flex-wrap gap-4 mt-4">
      <OsnTagwebsite :url="meetup.website" />
    </div>
  </LandingContainer>
</template>
