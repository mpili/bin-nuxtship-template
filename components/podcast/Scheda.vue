<script setup>
defineProps(["podc"]);
</script>

<template>
	<div>
		<div
      		class="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md"
    	>
			<NuxtLink :to="podc.url" >
				<h4 class="text-lg font-medium text-gray-400">{{ podc.nome }}</h4>
				<div>
					<img
					:src="podc.img"
					:width="580"
					:height="580"
					format="avif"
					alt="dove"
					class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
				/>
				</div>
			</NuxtLink>
		</div>
	</div>
</template>
