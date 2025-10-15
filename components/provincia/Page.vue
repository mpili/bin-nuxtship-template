<script setup>
const props = defineProps(["data"]);
</script>
<template>
	<ProvinciaHead :data="data" />
	<ProvinciaMap :data="data" />
	<ProvinciaSchede :data="data" />
</template>
