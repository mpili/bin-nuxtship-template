<script setup>
const props = defineProps(["dataosm","lat","lon","datanomninatim", "tags"]);
const address = props.datanomninatim?.address;
</script>
<template>
	<OnwNominatmancanti v-if="address" :address="address" :tags="tags" />
	<OnwNominatvalori v-if="address" :address="address" />
	<NuxtLink
		:to="`https://www.openstreetmap.org/edit?${dataosm.type}=${dataosm.id}`"
		class="text-sm text-blue-600 hover:underline"
		target="_blank"
		rel="noopener noreferrer">
		<button class="btn">OsnMap</button>
	</NuxtLink>
	<OsnXmaps :data="dataosm" :pending="pending" :dbdata="dbdata" />
</template>
