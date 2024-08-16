<script setup>

const url_api  = `/data/poitags_count.json`;

/* This call is performed before hydration */
// var { data } = await useFetch(url_api);

/* This call will only be performed on the client */
const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false
});

definePageMeta({
  layout: "landing",
});
</script>

<template>
	<LandingContainer>
		<LandingSectionhead>
			<template v-slot:title>Categorie Esercenti</template>
		</LandingSectionhead>
		<div v-if="pending">
			Loading ...
		</div>
		<div v-else>
			<OstPagecount :data="data" />
		</div>
	</LandingContainer>
</template>
