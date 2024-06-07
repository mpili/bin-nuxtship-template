<script setup>
defineProps(["podc"]);
</script>

<template>
	<div>
		<div
      		class="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md"
    	>
			<h1 class="text-2xl font-bold">{{ podc.nome }}</h1>
			<div class="flex mt-8">
				<img
				:src="podc.img"
				width="400"
				height="580"
				format="avif"
				alt="dove"
				class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
			/>
			</div>
			<LandingPodcapp :podcapps="podc.apps" />
		</div>
	</div>
</template>
