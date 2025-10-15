<script setup>
const props = defineProps(["data"]);
</script>
<template>
	<RegioneHead :data="data" />
	<RegioneMap :data="data" />
	<div class="flex flex-wrap">
		<RegioneScheda
			class="m-2"
			v-for="item in data.elements" :data="item"
		/>
	</div>
</template>
