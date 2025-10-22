<script setup>
const props = defineProps(["id"]);
</script>
<template>
	<a
		:href="'https://www.openstreetmap.org/node/' + id"
		target="_blank"
		class="text-sm"
	>
		<MainBadge
			icona="simple-icons:openstreetmap"
			testo="openstreetmap"
		/>
	</a>
</template>
