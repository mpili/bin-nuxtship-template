<script setup>
defineProps(["data"]);
</script>
<template>
	<!-- {{data.elements}}ss -->
	<div class="flex flex-wrap">
		<RegioniScheda
			class="m-2"
			v-for="item in data" :data="item"
		/>
	</div>
</template>
