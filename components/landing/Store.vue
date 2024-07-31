<script setup>
defineProps(["store"]);
</script>

<template>
	<div>
		<div
      		class="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md"
    	>
			<h4 class="text-lg font-medium text-gray-400">{{ store.nome }}</h4>
			<div>
				<NuxtImg
					:src="store.img"
					format="webp"
					alt="Team"
					class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
				/>
			</div>
			<div class="flex mt-8">
				<LandingLink
					:href="store.url"
					target="_blank"
					block
				>{{ store.titololink }}</LandingLink>
			</div>
		</div>
	</div>
</template>
