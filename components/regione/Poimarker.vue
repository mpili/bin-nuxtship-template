<script setup>
import { computed } from 'vue';

const props = defineProps(["poi"]);

const hasValidCoords = computed(() => {
  const lat = usePoiLat(props.poi);
  const lon = usePoiLon(props.poi);
  return lat !== undefined && lat !== null && lon !== undefined && lon !== null;
});
</script>
<template>
	<LCircle v-if="hasValidCoords"
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
