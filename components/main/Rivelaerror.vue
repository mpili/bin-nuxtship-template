<script setup>
	const props = defineProps(["error"]);
</script>
<template>
	<div v-if="error">
		<!-- <UiRivela title="errore" :description="error" /> -->
	</div>
</template>