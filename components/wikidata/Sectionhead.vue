<script setup>
const props = defineProps(["wikidataentities"]);
</script>

<template>
	<LandingSectionhead>
		<template v-slot:title>
			{{wikidataentities?.labels?.it?.value}}
		</template>
		<template v-slot:desc>
			{{wikidataentities?.descriptions?.it?.value}}
		</template>
	</LandingSectionhead>	
</template>