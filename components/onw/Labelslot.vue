<script setup>
const props = defineProps(["label"]);
</script>
<template>
	<div>
		<span class="text-info">{{label}} &nbsp;</span>
			<slot></slot>
	</div>
</template>
