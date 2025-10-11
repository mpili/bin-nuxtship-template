<script setup>
const props = defineProps(["id"]);
const idcomune = props.id;
const idarea = useOverpassarea(idcomune);

const osn_tipo =  "nwr"; // "node";
const brandwikidata_values = useBrandwikidatavalues();

// const url_api = `https://overpass-api.de/api/interpreter?data=[out:json][timeout:60];area(id:${idarea})->.searchArea;(${osn_tipo}["currency:XBT"="yes"](area.searchArea);${osn_tipo}["brand:wikidata"~"^(${brandwikidata_values})$"](area.searchArea););out meta;`;
// const url_api = `https://overpass-api.de/api/interpreter?data=[out:json][timeout:60];area(id:${idarea})->.searchArea;(${osn_tipo}["currency:XBT"="yes"](around.area.searchArea:20000);${osn_tipo}["brand:wikidata"~"^(${brandwikidata_values})$"](around.area.searchArea:20000););out meta;`;

const op_def_area = `area(id:${idarea})->.searchArea`;

const q1 = `${osn_tipo}["currency:XBT"="yes"](area.searchArea)`;
const q2 = `${osn_tipo}["brand:wikidata"~"^(${brandwikidata_values})$"](area.searchArea)`;
const oppar = `${op_def_area};(${q1};${q2};)`;
const url_api = useOverpass(oppar);

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

</script>
<template>
	{{url_api}}
	<div v-if="pending">
		<UiSkeleton />
    </div>
	<div v-else class="my-6">
		<OstMap :pois="data.elements" />
		<OnwListapoi :datapois="data.elements" />
	</div>
	<div v-if="error">
		<UiRivela title="errore" :description="error" />
	</div>
</template>
