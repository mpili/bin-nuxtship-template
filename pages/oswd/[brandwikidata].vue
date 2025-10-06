<script setup>
const { brandwikidata } = useRoute().params;

definePageMeta({
  layout: "main",
});
</script>

<template>
  <LandingContainer>

    <!-- <LandingBreadcrumb :voci="breadcrumb" /> -->

    <!-- <OstFeatured :tagvalue="tag+'_'+value" /> -->
    
      <WikidataPagetop :brandwikidata="brandwikidata" />
      <OnwBrandwikidata :brandwikidata="brandwikidata" />
      <WikidataPois :brandwikidata="brandwikidata" />

      <OstWikitag :tag="tag" :value="value" />
      
      <LandingDisclaimer />
  </LandingContainer>
</template>