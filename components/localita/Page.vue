<script setup>
const props = defineProps(["data"]);

const breadcrumb = computed(() => [
  {
    label: "comunità",
    path: "/comunita",
  },
  {
    label: props.data.name,
  },
]);

</script>

<template>
	<LandingSectionhead>
		<template v-slot:title>{{ data.name }}</template>
		<template v-slot:desc>{{ data.name }}</template>
	</LandingSectionhead>
	<LandingBreadcrumb :voci="breadcrumb" />
	<div class="py-8">
		<LMap
			style="height:250px"
			:zoom="10"
			:center="[data.lng, data.lat]"
			:use-global-leaflet="false"
		>
			<LTileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
				layer-type="base"
				name="OpenStreetMap"
			/>
			<ComunitaPoimarker v-for="poi of data.poi" :poi="poi" />
		</LMap>
	</div>
	
	<LocalitaMeetup :data="data" />
	<ComunitaPoislist :data="data" />
	<LandingDisclaimer />
</template>