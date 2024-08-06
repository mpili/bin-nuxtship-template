<script setup>
defineProps(["data"]);
</script>

<template>
  <h2>Meetup</h2>
  <div v-if="data.telegram">
	<ul>
		<li v-for="t in data.telegram">
			<NuxtLink :href="`/c/${t.telegram}`">
			{{ t.telegram }}
			</NuxtLink>
		</li>
	</ul>
  </div>
</template>