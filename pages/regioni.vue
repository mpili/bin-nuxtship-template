<script setup>

// Cerca tutte le relazioni con i tag specificati all'interno dell'area definita
// const areaItalia ='area["ISO3166-1"="IT"]->.searchArea'

// const url_api = useOverpass(useOverpassadminloc("365331", "4"));

// const { pending, data, error } = await useLazyFetch(url_api, {
//   lazy: true,
//   server: false,
// });

import data from "~/assets/data/regioni.json";

definePageMeta({
  layout: "main",
});

</script>

<template>
	<LandingContainer>

		<LandingSectionhead>
		<template v-slot:title>Regioni</template>
		</LandingSectionhead>

		<RegioniPage :data="data" />
	</LandingContainer>
</template>
