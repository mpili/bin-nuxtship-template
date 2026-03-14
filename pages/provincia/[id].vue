<script setup>
const { id } = useRoute().params;
// const url_api = useOverpass(useOverpassadminloc(id, "8"));
const url_api  = `/data/province/${id}.json`;

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

const isLoading = computed(() => (process.server ? true : pending.value));

definePageMeta({
  layout: "main",
});
</script>
<template>
	<LandingContainer>
		<!-- <UiRivela title="api" :description="url_api" /> -->
		<div v-if="isLoading">
			<UiSkeletonlines />
		</div>
		<div v-else>
			<ProvinciaPage :data="data" />
		</div>
		<MainRivelaerror :error="error" />
	</LandingContainer>
</template>
