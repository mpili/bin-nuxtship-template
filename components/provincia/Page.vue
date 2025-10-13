<script setup>
const props = defineProps(["data"]);
</script>
<template>
	<ProvinciaMap :data="data" />
	<ProvinciaSchede :data="data" />
</template>
