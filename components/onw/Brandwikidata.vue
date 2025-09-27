<script setup>
const props = defineProps(["data"]);
</script>

<template>
	<NuxtLink
		v-if="data?.tags['brand:wikidata']"
		:to="`https://www.wikidata.org/entity/${data?.tags['brand:wikidata']}?uselang=it`"
		target="_blank"
		rel="noopener"
		class="text-primary font-bold hover:underline"
	>
		<OnwTag
			v-if="data?.tags['brand:wikidata']"
			icona="tabler:brand-pagekit"
			etichetta="Brand wikidata"
			:testo="data?.tags['brand:wikidata']"
		/>
	</NuxtLink>
</template>
