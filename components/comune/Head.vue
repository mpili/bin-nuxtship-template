<script setup>
const { id } = useRoute().params;

const url_api = useOverpass("nwr(id:" + id + ")");

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

</script>
<template>
		<div v-if="pending">
			<UiSkeleton />
		</div>
		<div v-else>
			<LandingSectionhead>
				<template v-slot:title>{{useTagsnameit(data.elements[0].tags)}}</template>
				<template v-slot:desc>Attività</template>
			</LandingSectionhead>
			<!-- <UiRivela title="dati" :description="data" /> -->
		</div>
		<div v-if="error">
			<UiRivela title="errore" :description="error" />
		</div>
</template>
