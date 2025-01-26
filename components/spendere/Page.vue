<script setup>
defineProps(["data"]);
</script>
<template>
	<div class="flex flex-wrap">
		<SpendereScheda
			class="m-2"
			v-for="item in data" :data="item"
		/>
	</div>
</template>
