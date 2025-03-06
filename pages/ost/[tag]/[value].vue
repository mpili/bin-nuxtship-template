<script setup>
const { tag, value } = useRoute().params;
// const url_api = `https://overpass-api.de/api/interpreter?data=[out:json][timeout:25];area(id:3600365331)->.searchArea;nwr["currency:XBT"="yes"][${tag}~${value}](area.searchArea);out meta;`;

const operators_values = "Trony|Conad|CONAD Soc\. Coop\.|Unieuro S\.p\.A\.|MediaMarket S\.p\.A\.|Decathlon|OVS|Ikea Italia Retail S\.r\.l\.";
const osn_tipo =  "node"; // "nwr";
const url_api = `https://overpass-api.de/api/interpreter?data=[out:json][timeout:25];area(id:3600365331)->.searchArea;(${osn_tipo}["currency:XBT"="yes"][${tag}~${value}](area.searchArea);${osn_tipo}["operator"~"^(${operators_values})$"][${tag}~${value}](area.searchArea););out meta;`;


/* This call is performed before hydration */
// var { data } = await useFetch(url_api);

/* This call will only be performed on the client */
const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

// this call will be performed server side
// const { data } = await useAsyncData("data", () => $fetch(url_api));

const tagita = useTagtraduciit(tag) + " " + useTagtraduciit(tag, value);

const breadcrumb = computed(() => [
  {
    label: tag=='"addr:city"' ? "" : "Categorie Esercenti",
    path: tag=='"addr:city"' ? "" : "/categorie",
  },
  {
    label: tagita,
  },
]);

useHead({
  title: tagita + " | Bitcoin Italia Network",
  link: [
    {
      rel: 'canonical',
      href: `https://bitcoinitalianetwork.com/ost/${tag.replace(/"/g,'')}/${value.replace(/"/g,'')}`,
    },
  ],
});

definePageMeta({
  layout: "main",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>
        <span class="font-extralight">{{useTagtraduciit(tag)}}</span>
        &nbsp;
        <span class="font-bold">{{useTagtraduciit(tag, value)}}</span>
      </template>
      <template v-slot:desc
        >Le attività che accettano Bitcoin in Italia.</template
      >
    </LandingSectionhead>

    <LandingBreadcrumb :voci="breadcrumb" />

    <OstFeatured :tagvalue="tag+'_'+value" />

    <div v-if="pending">
      <UiSkeleton />
    </div>
    <div v-else class="my-6">
    <!-- <div class="my-6"> -->
      <OstMap :pois="data.elements" />

      <div v-for="poi in data.elements">
        <OsnLinelink :poi="poi" />
      </div>

      <OstWikitag :tag="tag" :value="value" />
      
      <LandingDisclaimer />
    </div>
  </LandingContainer>
</template>
