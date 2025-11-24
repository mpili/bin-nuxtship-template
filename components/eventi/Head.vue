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
    <template v-slot:title>Eventi delle community</template>
    <template v-slot:desc>Trova i prossimi incontri vicino a te</template>
  </LandingSectionhead>

  <LandingMainimg urlimg="/img/features/eventi.jpg" />

  <LandingBreadcrumb :voci="breadcrumb" />
</template>