<script setup>
defineProps(["data"]);
</script>
<template>
	<!-- {{data.elements}}ss -->
	<div class="flex flex-wrap pt-4">
		<RegioniScheda
			class="m-2"
			v-for="item in data" :data="item"
		/>
	</div>
</template>
