<script setup>
const props = defineProps(["data"]);
</script>
<template>
	<ProvinciaBreadcrumb :data="data" />
	<LandingSectionhead>
		<template v-slot:title>{{data.name}}</template>
		<template v-slot:desc>Comuni della provincia di {{data.name}}</template>
	</LandingSectionhead>
	<ProvinciaEventi :provincia="data.slug" />

	<!-- <UiRivela title="dati" :description="data" /> -->
</template>
