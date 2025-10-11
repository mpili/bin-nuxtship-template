<script setup>
const props = defineProps(["data","id"]);
</script>
<template>
	<ComuneHead :id="id" />
	<ComuneDati :id="id" :center="center" />
</template>
