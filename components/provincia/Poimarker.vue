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
