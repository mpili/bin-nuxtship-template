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
	<!-- <UiRivela title="api" :description="url_api" /> -->
	<div v-if="pending">
		<UiSkeletonlines />
	</div>
	<div v-else>
		<ProvinciaHead2 :name="useDeepname(data)" />
	</div>
	<div v-if="error">
		<UiRivela title="errore" :description="error" />
	</div>
</template>
