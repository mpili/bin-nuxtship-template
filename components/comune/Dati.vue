<script setup>
const props = defineProps(["id", "center"]);
const idcomune = props.id;
const oppar = `relation(${idcomune})`;
const url_api = useOverpass(oppar);

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

</script>
<template>
	<div class="my-6">
		<!-- <UiRivela title="api" :description="url_api" /> -->
		<div v-if="pending">
			<UiSkeleton />
		</div>
		<div v-else>
			<ComunePoisaround :daticomune="data" :center="data.elements[0].center" />
			<!-- <UiRivela title="dati" :description="data.elements[0].center" /> -->
		</div>
		<MainRivelaerror :error="error" />
	</div>
</template>
