<script setup>
const props = defineProps(["data"]);
</script>

<template>
	<NuxtLink
		v-if="data?.tags['brand:wikipedia']"
		:to="`https://www.wikidata.org/wiki/${data?.tags['brand:wikipedia']}?uselang=it`"
		target="_blank"
		rel="noopener"
		class="text-primary font-bold hover:underline"
	>
		<OnwTag
			v-if="data?.tags['brand:wikipedia']"
			icona="tabler:brand-pagekit"
			etichetta="Brand wikipedia"
			:testo="data?.tags['brand:wikipedia']"
		/>
	</NuxtLink>
</template>