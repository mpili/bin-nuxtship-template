<script setup>
const props = defineProps(["tags"]);
</script>
<template>
	<div v-if="tags?.image" class="mt-8">
		<!-- <img :src="tags?.image" /> -->
		 <NuxtImg :src="tags?.image" class="rounded-lg" />
	</div>
</template>
