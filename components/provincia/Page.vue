<script setup>
const props = defineProps(["data","id"]);
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
