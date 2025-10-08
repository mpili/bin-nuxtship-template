<script setup>
const props = defineProps(["brandwikidata"]);
const brandwikidata = props.brandwikidata;

const url_api = `https://overpass-api.de/api/interpreter?data=[out:json][timeout:60];area(id:3600365331)-%3E.searchArea;(node[%22brand:wikidata%22=%22${brandwikidata}%22](area.searchArea);way[%22brand:wikidata%22=%22${brandwikidata}%22](area.searchArea););out%20meta;`;

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

</script>
<template>
	<div v-if="pending">
		<UiSkeleton />
    </div>
	<div v-else class="my-6">
		<OstMap :pois="data.elements" />

		<OnwListapoi :datapois="data.elements" />
		<!-- <div v-for="poi in data.elements">
			<OsnLinelink :poi="poi" />
		</div> -->
	</div>
</template>