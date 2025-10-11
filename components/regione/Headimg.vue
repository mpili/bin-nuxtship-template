<script setup>
const props = defineProps(["id"]);
const id = props.id;
</script>
<template>
	<div class="mx-20 my-4">
		<NuxtImg
			:src="`/img/regione/${id}.png`"
			format="webp"
			class="object-cover w-full h-full"
		/>
	</div>
</template>
