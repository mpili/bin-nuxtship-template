<script setup>
const props = defineProps(["id"]);
const url_api  = `/data/comuni/${props.id}.json`;

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});
</script>
<template>
	<div v-if="pending">
		<UiSkeletonlines />
	</div>
	<div v-else>
		<ComuneBreadcrumb :comune="data" />
		<LandingSectionhead>
			<template v-slot:title>{{ data['name'] }}</template>
			<template v-slot:desc>Dove puoi comprare pagando in bitcoin a {{ data['name'] }}</template>
		</LandingSectionhead>
	</div>
	<MainRivelaerror :error="error" />
</template>
