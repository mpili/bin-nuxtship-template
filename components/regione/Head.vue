<script setup>
// const { id } = useRoute().params;
const props = defineProps(["id"]);
const id = props.id;

const url_api = useOverpass("nwr(id:" + props.id + ")");

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

</script>
<template>
	<div v-if="pending">
		<UiSkeletonlines />
	</div>
	<div v-else>
		<RegioneBreadcrumb :data="data.elements[0]" />
		<LandingSectionhead>
			<template v-slot:title>{{useTagsnameit(data.elements[0].tags)}}</template>
			<template v-slot:desc>Province della regione</template>
		</LandingSectionhead>
		<!-- <UiRivela title="dati" :description="data" /> -->
	</div>
	<RegioneHeadimg :id="id" />
	<div v-if="error">
		<UiRivela title="errore" :description="error" />
	</div>
</template>