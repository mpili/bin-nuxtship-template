<script setup>
const props = defineProps(["id"]);
const idcomune = props.id;
const idarea = useOverpassarea(idcomune);

const osn_tipo =  "nwr"; // "node";

const brandwikidata_values = "Q105644278|Q137023|Q894870|Q96311190|Q817139|Q1027874|Q217599|Q27897515|Q639075|Q57543102|Q509349|Q610492|Q1059636|Q680990|Q63335|Q2470307|Q188326|Q54078|Q305404|Q116214505|Q1050061|Q2381223|Q2042514|Q105643314|Q1634762|Q706793|Q28056374|Q3999692|Q4004687|Q1414836"
const url_api = `https://overpass-api.de/api/interpreter?data=[out:json][timeout:60];area(id:${idarea})->.searchArea;(${osn_tipo}["currency:XBT"="yes"](area.searchArea);${osn_tipo}["brand:wikidata"~"^(${brandwikidata_values})$"](area.searchArea););out meta;`;

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
	</div>
</template>