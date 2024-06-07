<script setup>
defineProps(["podcapps"]);
</script>

<template>
	<h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Ascoltalo su: </h2>
	<ul>
		<li v-for="item of podcapps">
			<a :href="item.url" target="_blank">{{ item.app }}</a>
		</li>
	</ul>
</template>
