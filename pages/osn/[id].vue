<script setup>
const { id } = useRoute().params;
const url_api = `https://overpass-api.de/api/interpreter?data=[out:json];node(id:${id});out meta;`;

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
    <div v-if="pending">
      <LandingLoading />
    </div>
    <div v-else>
      <div>
        <OsnPage :data="data.elements[0]" />
      </div>
    </div>
    <LandingDisclaimer />

  </LandingContainer>
</template>
