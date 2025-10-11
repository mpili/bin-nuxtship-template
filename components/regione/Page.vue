<script setup>
defineProps(["data","id"]);
</script>
<template>
	<RegioneHead :id="id" />

	<div class="flex flex-wrap">
		<RegioneScheda
			class="m-2"
			v-for="item in data.elements" :data="item"
		/>
	</div>
</template>
