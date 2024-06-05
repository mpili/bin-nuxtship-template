<script setup>
defineProps(["dove"]);
</script>

<template>
	<div>
		<div
      		class="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md"
    	>
			<h4 class="text-lg font-medium text-gray-400">{{ dove.nome }}</h4>
			<div>
				<img
				:src="dove.img"
				:width="580"
				:height="580"
				format="avif"
				alt="dove"
				class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
			/>
			</div>
			<div class="flex mt-8">
				<LandingLink
					:href="dove.url"
					target="_blank"
					block
				>{{ dove.titololink }}</LandingLink>
			</div>
		</div>
	</div>
</template>
