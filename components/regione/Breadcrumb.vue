<script setup>
const props = defineProps(["data"]);

const breadcrumb = computed(() => [
	{
		label: "Regioni",
		path: "/regioni",
	},
	{
		label: props.data['name'],
	},
]);
</script>

<template>
	<LandingBreadcrumb :voci="breadcrumb" />
</template>
