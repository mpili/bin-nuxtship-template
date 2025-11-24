<script setup>
const { id } = useRoute().params;
const url_api = `/data/spendere/${id}.json`;

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

useHead({
  title: "Bitcoin Italia Network - spendere",
});

const breadcrumb = computed(() => [
  {
    label: "negozi e servizi",
    path: "/spendere/spendere",
  },
  {
    label: id,
  },
]);



definePageMeta({
  layout: "main",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title><span class="capitalize">{{ id }}</span></template>
      <template v-slot:subtitle>Le attività che accettano pagamenti in Bitcoin in Italia.</template>
    </LandingSectionhead>

    <LandingBreadcrumb :voci="breadcrumb" />

    <div v-if="pending">
      <span class="loading loading-spinner loading-lg"></span>
    </div>
    <div v-if="data">
      <SpenderePage :data="data" />
    </div>
  </LandingContainer>
</template>
