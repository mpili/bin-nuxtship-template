<script setup>
defineProps(["poi"]);
</script>
<template>
	<LCircle v-if="poi"
		:lat-lng="[usePoiLat(poi), usePoiLon(poi)]"
		:radius="800"
    	:color="'blue'"
	>
		<LPopup v-if="poi.tags">
			<NuxtLink :to="`/comune/${poi.id}`">
				{{useTagsnameit(poi.tags)}}
			</NuxtLink>
		</LPopup>
	</LCircle>
</template>
