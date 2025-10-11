<script setup>
// const { id } = useRoute().params;
const props = defineProps(["id"]);
// const id = props.id;

const url_api = useOverpass("nwr(id:" + props.id + ")");

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

</script>
<template>
		<div v-if="pending">
			<div class="flex w-52 flex-col gap-4">
				<div class="skeleton h-4 w-full"></div>
				<div class="skeleton h-4 w-full"></div>
			</div>
		</div>
		<div v-else>
			<RegioneBreadcrumb :data="data.elements[0]" />
			<LandingSectionhead>
				<template v-slot:title>{{useTagsnameit(data.elements[0].tags)}}</template>
				<template v-slot:desc>Province della regione</template>
			</LandingSectionhead>
			<!-- <UiRivela title="dati" :description="data" /> -->
		</div>
		<div v-if="error">
			<UiRivela title="errore" :description="error" />
		</div>
</template>