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

const breadcrumb = computed(() => [
  {
    label: "eventi",
  },
]);

</script>
<template>
  <LandingSectionhead>
    <template v-slot:title>Eventi</template>
    <template v-slot:desc>Il calendario degli incontri dei Bitcoiner.</template>
  </LandingSectionhead>

  <LandingMainimg urlimg="/img/features/eventi.jpg" />

  <LandingBreadcrumb :voci="breadcrumb" />
</template>