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
			<RegioneProvincialink :tags="poi.tags">
				Provincia di {{useTagsnameit(poi.tags)}}
			</RegioneProvincialink>
			<!-- <NuxtLink :to="`/provincia/${poi.id}`">
			</NuxtLink> -->
		</LPopup>
	</LCircle>
</template>
