<script setup>
const props = defineProps(["data"]);

const breadcrumb = computed(() => [
	{
		label: "Regioni",
		path: "/regioni",
	},
	{
		label: props.data.regione.name,
		path: "/regione/"+props.data.regione.slug,
	},
	{ label: "Provincia di "+props.data.name, },
]);
</script>

<template>
	<LandingBreadcrumb :voci="breadcrumb" />
	<!-- <UiRivela title="dati" :description="name" /> -->
</template>
