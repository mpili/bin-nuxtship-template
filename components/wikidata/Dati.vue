<script setup>
const props = defineProps(["brandwikidata"]);

const brand_wikidata = props.brandwikidata;
const apiUrl = `https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${brand_wikidata}&format=json&props=labels|descriptions&origin=*`;
// const apiUrl = `https://www.wikidata.org/w/api.php?action=wbgetentities&amp;ids=${brand_wikidata}&amp;format=json`;

const {
  pending: pending,
  data: wikidata,
  error: error,
} = await useLazyFetch(apiUrl, {
  lazy: true,
  server: false,
});
</script>

<template>
	<div>
		<div v-if="pending">
			<p>pending: {{pending}} ... </p>
		</div>
		<div v-else>
			<LandingSectionhead>
			<template v-slot:title>
				{{wikidata?.entities[brand_wikidata]?.labels?.it?.value}}
			</template>
			<template v-slot:desc>
					{{wikidata?.entities[brand_wikidata]?.descriptions?.it?.value}}
			</template>
			</LandingSectionhead>

			<!-- <div tabindex="0" class="collapse bg-base-100 border-base-300 border my-4">
				<div class="collapse-title text-gray-400">Dettaglio dati wikidata</div>
				<div class="collapse-content text-sm">
					<p>apiUrl: <span class="text-blue-400">{{apiUrl}}</span></p>
					<p class="text-gray-400 font-mono text-sm">{{wikidata}}</p>
				</div>
			</div> -->
		</div>
		<p v-if="error">error: {{error}}</p>
	</div>
</template>
