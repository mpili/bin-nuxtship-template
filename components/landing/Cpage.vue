<script setup>
defineProps(["data"]);
</script>

<template>
	<LandingSectionhead>
		<template v-slot:title>{{ data.name }}</template>
		<template v-slot:desc>Le comunità di Bitcoiner sul territorio italiano.</template>
	</LandingSectionhead>
	<div>
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
	<div  class="container mx-auto px-8 py-8 border-2 rounded-lg">
		<ul>Telegram
			<li><span class="text-gray-400">members: </span>{{data.telegram_members}}</li>
			<li><span class="text-gray-400">web: </span>
				<a :href="data.telegram_weburl" target="_blank">
					{{data.telegram_weburl}}
				</a></li>
			<li><span class="text-gray-400">app: </span>
				<a :href="data.telegram_app" target="_blank">
					{{data.telegram_app}}
				</a>
			</li>
		</ul>
	</div>
</template>