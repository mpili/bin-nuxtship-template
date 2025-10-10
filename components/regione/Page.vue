<script setup>
defineProps(["data"]);
</script>
<template>
	<div class="flex flex-wrap">
		<RegioneScheda
			class="m-2"
			v-for="item in data.elements" :data="item"
		/>
	</div>
</template>
