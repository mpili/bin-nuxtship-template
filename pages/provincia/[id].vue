<script setup>
const { id } = useRoute().params;
const url_api = useOverpass(useOverpassadminloc(id, "8"));

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
		<ProvinciaHead :id="id" />
		<div v-if="pending">
			<UiSkeletonlines />
		</div>
		<div v-else>
			<ProvinciaPage :data="data" :id="id" />
		</div>
		<div v-if="error">
			<UiRivela title="errore" :description="error" />
		</div>
	</LandingContainer>
</template>
