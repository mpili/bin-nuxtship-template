<script setup>
defineProps(["poi"]);
</script>
<template>
	<LCircle
		:lat-lng="[usePoiLat(poi), usePoiLon(poi)]"
		:radius="10000"
    	:color="'green'"
	>
		<LPopup v-if="poi.tags">
			<NuxtLink :to="`/provincia/${poi.id}`">
				Provincia di {{useTagsnameit(poi.tags)}}
			</NuxtLink>
		</LPopup>
	</LCircle>
</template>
