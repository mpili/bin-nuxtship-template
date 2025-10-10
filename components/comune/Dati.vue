<script setup>
const props = defineProps(["id"]);
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
			<ComunePoisaround :daticomune="data" />
		</div>
		<div v-if="error">
			<pre>{{ error }}</pre>
		</div>	
	</div>
</template>