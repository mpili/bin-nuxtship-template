<script setup>
const props = defineProps(["daticomune", "center"]);
const d = props.daticomune.elements[0];
const lat = d.center.lat;
const lon = d.center.lon;
const around = "(around:20000,"+lat+","+lon+")";
const osn_tipo =  "nwr";
const q1 = `${osn_tipo}["currency:XBT"="yes"]`+around;

const brandwikidata_values = useBrandwikidatavalues();
const q2 = `${osn_tipo}["brand:wikidata"~"^(${brandwikidata_values})$"]`+around;
const oppar = `(${q1};${q2};)`;
const url_api = useOverpass(oppar);

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
	<MainRivelaerror :error="error" />
</template>
