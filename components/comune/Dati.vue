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
		<div v-if="pending">
			<UiSkeleton />
		</div>
		<div v-else>
			<ComunePoisaround :daticomune="data" :center="center" />
		</div>
		<div v-if="error">
			<UiRivela title="errore" :description="error" />
		</div>
	</div>
</template>
