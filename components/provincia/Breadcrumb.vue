<script setup>
const props = defineProps(["name"]);
const name = props.name;

const breadcrumb = computed(() => [
	{
		label: "Regioni",
		path: "/regioni",
	},
	{ label: "...", },
	{ label: props.name, },
]);
</script>

<template>
	<LandingBreadcrumb :voci="breadcrumb" />
	<!-- <UiRivela title="dati" :description="name" /> -->
</template>
