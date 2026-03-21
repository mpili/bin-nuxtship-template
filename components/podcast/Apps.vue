<script setup>
defineProps(["podcapps"]);
</script>

<template>
	<div>
		<h2 class="text-center text-2xl font-bold leading-7 text-primary sm:truncate sm:text-3xl sm:tracking-tight mb-6">Ascoltalo su</h2>
		<ul class="space-y-4">
			<li v-for="item of podcapps">
				<a :href="item.url" target="_blank" class="block">
					<div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-base-200">
						<div class="card-body p-4">
							<div class="flex items-center space-x-4">
								<Icon name="material-symbols:podcasts" size="24" class="text-secondary" />
								<div class="card-title text-base-content">{{ item.app }}</div>
							</div>
						</div>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>
