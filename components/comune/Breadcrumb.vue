<script setup>
const props = defineProps(["data"]);

const breadcrumb = computed(() => [
	{
		label: "Regioni",
		path: "/regioni",
	},
	{ label: "...", },
	// { label: "regione?", },
	// { label: "provincia?", },
	{ label: useTagsnameit(props.data.tags), },
]);
</script>

<template>
	<LandingBreadcrumb :voci="breadcrumb" />
</template>
