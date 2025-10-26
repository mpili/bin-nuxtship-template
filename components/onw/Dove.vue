<script setup>
const props = defineProps(["titolo"]);
</script>
<template>
	<div class="bg-base-200 p-2">
		<h2 class="font-bold">
			{{titolo}}
		</h2>
		<div class="p-2">
			<slot></slot> <!-- Qui va il content passato dall'esterno -->
		</div>
	</div>
</template>
