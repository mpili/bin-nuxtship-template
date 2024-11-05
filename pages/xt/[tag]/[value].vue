<script setup>
const { tag, value } = useRoute().params;

const url_api = `https://bin-dev.pockethost.io/api/collections/xtags/records?filter=(tag=%22${tag}%22 %26%26 value=%22${value}%22)&perPage=999`;

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

const breadcrumb = computed(() => [
  {
    label: `${tag} : ${value}`,
  },
]);

definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>{{ tag }} : {{ value }}</template>
      <!-- <template v-slot:desc>Calendari Bitcoin.</template> -->
    </LandingSectionhead>

    <LandingBreadcrumb :voci="breadcrumb" />

    <div v-if="pending">
      Loading
      <Icon name="eos-icons:bubble-loading" size="48" color="gray" />
    </div>
    <div v-else>
      <XtLista :pois="data.items" />
    </div>
  </LandingContainer>
</template>
