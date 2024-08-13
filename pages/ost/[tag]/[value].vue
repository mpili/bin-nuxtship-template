<script setup>

const { tag, value } = useRoute().params;
const url_api = `https://overpass-api.de/api/interpreter?data=[out:json][timeout:25];area(id:3600365331)->.searchArea;nwr["currency:XBT"="yes"][${tag}=${value}](area.searchArea);out meta;`;

/* This call is performed before hydration */
// var { data } = await useFetch(url_api);

/* This call will only be performed on the client */
const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>

    <LandingSectionhead>
      <template v-slot:title>
        <OsnTraducitag :tag='tag.replace(/^"|"$/g, "")' :value='value.replace(/^"|"$/g, "")' />
      </template>
      <template v-slot:desc>Le attività che accettano Bitcoin in Italia.</template>
    </LandingSectionhead>

    <div v-if="pending">
      <LandingLoading />
    </div>
    <div v-else class="my-6">
      <OstMap :pois="data.elements" />

      <div v-for="poi in data.elements">
        <OsnLinelink :poi="poi" />
      </div>

      <LandingDisclaimer />
    </div>
  </LandingContainer>
</template>
