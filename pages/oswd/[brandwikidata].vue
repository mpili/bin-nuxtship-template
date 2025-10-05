<script setup>
const { brandwikidata } = useRoute().params;

// const url_api = `https://overpass-api.de/api/interpreter?data=[out:json][timeout:60];area(id:3600365331)-%3E.searchArea;(node[%22brand:wikidata%22=%22${brandwikidata}%22](area.searchArea);way[%22brand:wikidata%22=%22Q2470307%22](area.searchArea);relation[%22brand:wikidata%22=%22Q2470307%22](area.searchArea););out%20meta;`;
// tolto relation
const url_api = `https://overpass-api.de/api/interpreter?data=[out:json][timeout:60];area(id:3600365331)-%3E.searchArea;(node[%22brand:wikidata%22=%22${brandwikidata}%22](area.searchArea);way[%22brand:wikidata%22=%22${brandwikidata}%22](area.searchArea););out%20meta;`;

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

definePageMeta({
  layout: "main",
});
</script>

<template>

  <LandingContainer>

    <!-- <LandingBreadcrumb :voci="breadcrumb" /> -->

    <!-- <OstFeatured :tagvalue="tag+'_'+value" /> -->

    <div v-if="pending">
      <UiSkeleton />
    </div>
    <div v-else class="my-6">
    <!-- <div class="my-6"> -->
      <WikidataDati :brandwikidata="brandwikidata" />
      <OnwBrandwikidata :brandwikidata="brandwikidata" />
      <OstMap :pois="data.elements" />

      <div v-for="poi in data.elements">
        <OsnLinelink :poi="poi" />
      </div>

      <OstWikitag :tag="tag" :value="value" />
      
      <LandingDisclaimer />
    </div>
  </LandingContainer>

</template>