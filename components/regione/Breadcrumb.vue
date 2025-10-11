<script setup>
const props = defineProps(["data"]);

const breadcrumb = computed(() => [
	{
		label: "Regioni",
		path: "/regioni",
	},
	{
		label: useTagsnameit(props.data.tags),
	},
]);
</script>

<template>
	<LandingBreadcrumb :voci="breadcrumb" />
</template>
