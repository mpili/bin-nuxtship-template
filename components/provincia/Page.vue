<script setup>
const props = defineProps(["data"]);
</script>
<template>
	<ProvinciaHead :data="data" />
	<ProvinciaMap :data="data" />
	<ProvinciaSchede :items="data.elements" />
</template>
