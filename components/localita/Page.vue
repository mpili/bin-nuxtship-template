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

useHead({
  title: props?.data?.name + " | Bitcoin Italia Network",
  link: [
    {
      rel: 'canonical',
      href: `https://bitcoinitalianetwork.com/l/${props?.data?.id}`,
    },
  ],
});

</script>

<template>
		<div>
			
			
			<NuxtImg :src="`/img/l/${data.id}.jpg`" class="object-center aspect-square max-h-96" />
			<LandingSectionhead>
				<template v-slot:title>{{ data.name }}</template>
				<template v-slot:desc>{{ data.name }}</template>
			</LandingSectionhead>
			<LandingBreadcrumb :voci="breadcrumb" />
		</div>
			

	<div>

		<div class="md:w-full">
			<LMap
				style="height:224px"
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
	</div>
	
	<LocalitaMeetup :data="data" />
	<ComunitaPoislist :data="data" />
	<LandingDisclaimer />
</template>