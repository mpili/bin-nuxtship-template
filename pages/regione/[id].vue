<script setup>
const { id } = useRoute().params;

// const url_api = useOverpass(useOverpassadminloc(id, "6"));
// staticizato in /data/regioni/*.json
const url_api  = `/data/regioni/${id}.json`;

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

definePageMeta({
  layout: "main",
});
</script>
<template>
	<LandingContainer>
		<div v-if="pending">
			<UiSkeletonlines />
		</div>
		<div v-else>
			<RegionePage :data="data" />
			<!-- <UiRivela title="dati" :description="data" /> -->
		</div>
		<div v-if="error">
			<UiRivela title="errore" :description="error" />
		</div>
		<!-- <UiRivela title="api" :description="url_api" /> -->
	</LandingContainer>
</template>
