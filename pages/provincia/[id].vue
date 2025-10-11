<script setup>
const { id } = useRoute().params;

const url_api = useOverpass(useOverpassadminloc(id, "8"));

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
	<!--
	 <p>{{id}}</p>
	<p>{{url_api}}</p>
	 -->
	<LandingContainer>
		<LandingBreadcrumb :voci="breadcrumb" />
		<ProvinciaHead :id="id" />

		<div v-if="pending">
				<UiSkeleton />
			</div>
		<div v-else>
			<ProvinciaPage :data="data" />
		  </div>
	</LandingContainer>
</template>
