<script setup>
interface Props {
	titolo?: string;
	icona?: string;
	url?: string;
}
</script>

<template>
	<div>
		<Icon :name="icona" size="24" class="mr-2" />
		<span class="text-gray-400">{{ titolo }}</span>
		<a :href="url" target="_blank" class="text-sm font-bold text-blue-600">
			{{url}}
		</a>
	</div>	
</template>