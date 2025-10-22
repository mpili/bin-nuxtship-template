<script setup>
const props = defineProps(["datapois"]);

const sortedPois = computed(() =>
  [...props.datapois].sort((a, b) => {
    const nameA = a.tags?.name?.toLowerCase() || '';
    const nameB = b.tags?.name?.toLowerCase() || '';
    return nameA.localeCompare(nameB);
  })
);

</script>
<template>
	<div v-for="poi in sortedPois" :key="poi.id">
		<OsnLinelink :poi="poi" />
	</div>
</template>