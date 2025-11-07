<script setup>
	const props = defineProps(["error"]);
	const isDev = process.dev

</script>
<template>
	<div v-if="error && isDev">
		<UiRivela title="errore" :description="error" />
	</div>
</template>