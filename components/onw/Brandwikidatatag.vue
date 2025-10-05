<script setup>
const props = defineProps(["data"]);
</script>
<template>
	<OnwBrandwikidata :brandwikidata="data?.tags['brand:wikidata']" />
</template>
