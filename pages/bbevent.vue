<script setup>
useHead({
  title: "Eventi | Bitcoin Italia Network",
  meta: [
    {
      name: "description",
      content:
        "Il calendario degli appuntamenti, incontri e meetup dei bitcoiner.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://bitcoinitalianetwork.com/eventi",
    },
  ],
});

definePageMeta({
  layout: "main",
});

const breadcrumb = computed(() => [
  {
    label: "eventi",
  },
]);


</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Eventi</template>
      <template v-slot:desc
        >Il calendario degli incontri dei Bitcoiner.</template
      >
    </LandingSectionhead>

    <LandingBreadcrumb :voci="breadcrumb" />

    <EventiBb />
  </LandingContainer>
</template>
