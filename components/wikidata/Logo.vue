<script setup>
const props = defineProps(["data"]);

const brand_wikidata = props?.data?.tags['brand:wikidata'];
// const url_wikidata = `https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${brand_wikidata}&format=json`;
const url_wikidata = `https://www.wikidata.org/w/api.php?action=wbgetentities&amp;ids=${brand_wikidata}&amp;format=json`;

const {
  pending: pending,
  data: wikidata,
  error: error,
} = await useLazyFetch(url_wikidata, {
  lazy: true,
  server: false,
});
</script>

<template>

	<div>
		<p>WIKIDATA {{url_wikidata}}</p>
		<p>pending: {{pending}}</p>
		<p>data: {{wikidata}}</p>
		<p>error: {{error}}</p>
	</div>
	
</template>
