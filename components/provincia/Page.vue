<script setup>
defineProps(["data"]);
</script>
<template>
	<ProvinciaMap :data="data" />
	<div class="flex flex-wrap">
		<ProvinciaScheda
			class="m-2"
			v-for="item in data.elements" :data="item"
		/>
	</div>
</template>
