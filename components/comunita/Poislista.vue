<script setup>
const props = defineProps(["datapois"]);
</script>
<template>
	<div v-for="poi in datapois">
		<OsnLinelink :poi="poi" />
	</div>
</template>