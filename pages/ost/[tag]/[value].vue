<script setup>
const { tag, value } = useRoute().params;
// const url_api = `https://overpass-api.de/api/interpreter?data=[out:json][timeout:25];area(id:3600365331)->.searchArea;nwr["currency:XBT"="yes"][${tag}~${value}](area.searchArea);out meta;`;

const osn_tipo =  "node"; // "nwr";

// operators
// const operators_values = "Calzedonia|Q8|Despar|Tamoil|Intimissimi|Expert|Trony|Conad|CONAD Soc\. Coop\.|Unieuro S\.p\.A\.|MediaMarket S\.p\.A\.|Decathlon|OVS|Ikea Italia Retail S\.r\.l\.";
// const url_api = `https://overpass-api.de/api/interpreter?data=[out:json][timeout:25];area(id:3600365331)->.searchArea;(${osn_tipo}["currency:XBT"="yes"][${tag}~${value}](area.searchArea);${osn_tipo}["operator"~"^(${operators_values})$"][${tag}~${value}](area.searchArea););out meta;`;

// brand:wikidata
const brandwikidata_values = "Q894870|Q96311190|Q817139|Q1027874|Q217599|Q27897515|Q639075|Q57543102|Q509349|Q610492|Q1059636|Q680990|Q63335|Q2470307|Q188326|Q54078|Q305404|Q116214505|Q1050061|Q2381223|Q2042514|Q105643314|Q1634762|Q706793|Q28056374|Q3999692|Q4004687|Q1414836"
const url_api = `https://overpass-api.de/api/interpreter?data=[out:json][timeout:60];area(id:3600365331)->.searchArea;(${osn_tipo}["currency:XBT"="yes"][${tag}~%22${value}%22](area.searchArea);${osn_tipo}["brand:wikidata"~"^(${brandwikidata_values})$"][${tag}~${value}](area.searchArea););out meta;`;


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

    <div v-if="error">
      <div tabindex="0" class="collapse bg-base-100 border-base-300 border my-4">
        <div class="collapse-title text-error">Errore nel caricamento dei dati</div>
				<div class="collapse-content text-sm">
          <p class="text-error-content font-mono text-sm">
            {{error}}
          </p>
          <p></p>
				</div>
			</div>
    </div>
  </LandingContainer>
</template>
