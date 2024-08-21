<script setup>
const { tag, value } = useRoute().params;
const url_api = `https://overpass-api.de/api/interpreter?data=[out:json][timeout:25];area(id:3600365331)->.searchArea;nwr["currency:XBT"="yes"][${tag}=${value}](area.searchArea);out meta;`;

/* This call is performed before hydration */
// var { data } = await useFetch(url_api);

/* This call will only be performed on the client */
// const { pending, data, error } = await useLazyFetch(url_api, {
//   lazy: true,
//   server: false,
// });

// this call will be performed server side
const { data } = await useAsyncData("data", () => $fetch(url_api));

const breadcrumb = computed(() => [
  {
    label: "Categorie Esercenti",
    path: "/ostcount",
  },
  {
    label: useTagtraduciit(tag, value),
  },

]);

definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>
        <OsnTraducitag
          :tag="tag.replace(/^&quot;|&quot;$/g, '')"
          :value="value.replace(/^&quot;|&quot;$/g, '')"
        />
      </template>
      <template v-slot:desc
        >Le attività che accettano Bitcoin in Italia.</template
      >
    </LandingSectionhead>

    <LandingBreadcrumb :voci="breadcrumb" />

    <div v-if="pending">
      <LandingLoading />
    </div>
    <div v-else class="my-6">
      <OstMap :pois="data.elements" />

      <div v-for="poi in data.elements">
        <OsnLinelink :poi="poi" />
      </div>

      <OstWikitag :tag="tag" :value="value" />
      
      <LandingDisclaimer />
    </div>
  </LandingContainer>
</template>
