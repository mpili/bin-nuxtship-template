<script setup>
defineProps(["podcapps"]);
</script>

<template>
	<div>
		<h2 class="text-center text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Ascoltalo su</h2>
		<ul class="space-y-4">
			<li v-for="item of podcapps">
				<a :href="item.url" target="_blank">
					<div class="p-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
						<Icon name="material-symbols:podcasts" size="20" />
						<div class="text-xl font-medium text-black">{{ item.app }}</div>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>
