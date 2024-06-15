<script setup>
defineProps(["poi"]);
</script>

<template>
	<LMarker :lat-lng="[poi.lat, poi.lon]">
		<LPopup v-if="poi.tags">
			<div v-if="poi.tags.name">
				<span class="text-gray-900 font-semibold">{{ poi.tags.name }}</span>
				<div v-if="poi.tags['addr:street']">
					{{ poi.tags['addr:street'] }}<span v-if="poi.tags['addr:housenumber']">, {{ poi.tags['addr:housenumber'] }}
						</span>
				</div>
			</div>
		</LPopup>
	</LMarker>
</template>
