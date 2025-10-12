<script setup>
const props = defineProps(["name"]);
const name = props.name;

</script>
<template>
	<ProvinciaBreadcrumb :name="name" />
	<LandingSectionhead>
		<template v-slot:title>{{name}}</template>
		<template v-slot:desc>Comuni della provincia di {{name}}</template>
	</LandingSectionhead>
	<!-- <UiRivela title="dati" :description="data" /> -->
</template>
