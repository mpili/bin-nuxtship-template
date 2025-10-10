<script setup>
const { id } = useRoute().params;

// const url_api = useOverpass(useOverpassadminloc(id, "6"));
const url_api  = `/data/regioni/${id}.json`;

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

const breadcrumb = computed(() => [
  {
    label: "Regioni",
    path: "/regioni",
  },
]);

definePageMeta({
  layout: "main",
});

</script>
<template>
	<LandingContainer>
		<LandingBreadcrumb :voci="breadcrumb" />
		<RegioneHead :id="id" />

		<div v-if="pending">
			<div class="flex w-52 flex-col gap-4">
				<div class="skeleton h-4 w-full"></div>
				<div class="skeleton h-4 w-full"></div>
			</div>
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
