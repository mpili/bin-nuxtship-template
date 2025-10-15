<script setup>
const { id } = useRoute().params;
// const url_api = useOverpass(useOverpassadminloc(id, "8"));
const url_api  = `/data/province/${id}.json`;

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
		<!-- <UiRivela title="api" :description="url_api" /> -->
		<div v-if="pending">
			<UiSkeletonlines />
		</div>
		<div v-else>
			<ProvinciaPage :data="data" />
		</div>
		<div v-if="error">
			<UiRivela title="errore" :description="error" />
		</div>
	</LandingContainer>
</template>
