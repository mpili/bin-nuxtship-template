<script setup>
defineProps(["data"]);
</script>

<template class="py-8">
	<LandingSectionhead>
		<template v-slot:title>{{ data.localita }}</template>
		<template v-slot:desc>{{ data.name }}</template>
	</LandingSectionhead>
	<div class="py-8">
		<LMap
			style="height:250px"
			:zoom="12"
			:center="[data.lng, data.lat]"
			:use-global-leaflet="false"
		>
			<LTileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
				layer-type="base"
				name="OpenStreetMap"
			/>
			<LMarker :lat-lng="[data.lng, data.lat]"></LMarker>
		</LMap>
	</div>
	<div class="pt-10 pb-8 container mx-auto px-8 py-8 border-2 rounded-lg shadow-xl sm:px-10">
		<div class="divide-y divide-gray-300/50">
			<div class="flex flex-row align-items-center py-4 px-8 py-2">
				<Icon name="logos:telegram" size="24" class="mr-2" />
				<span>Telegram</span>
			</div>
			<div class="py-2  px-8 py-8">
				<ul class="space-y-4">
					<li v-if="data.telegram_members">
						<span class="text-gray-400">members: </span>{{data.telegram_members}}
					</li>
					<li v-if="data.telegram_app">
						<ComunitaButton :href="data.telegram_app" :icona="'fa6-solid:mobile-screen'" :testo="'app'" />
					</li>
					<li v-if="data.telegram_weburl">
						<ComunitaButton :href="data.telegram_weburl" :icona="'mdi:web'" :testo="'web'" />
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>