<script setup>
const props = defineProps(["brandwikidata"]);
</script>

<template>
	<NuxtLink
		v-if="brandwikidata"
		:to="`/oswd/${brandwikidata}`"
		class="text-primary font-bold hover:underline"
	>
		<OnwTag
			v-if="brandwikidata"
			icona="tabler:brand-pagekit"
			etichetta="Brand wikidata"
			:testo="brandwikidata"
		/>
	</NuxtLink>
  <OsnVouchers :brandwikidata="brandwikidata" />
</template>
