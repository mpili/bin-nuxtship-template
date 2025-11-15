<script setup>
const props = defineProps(["datapois"]);
const listaAccordion = ref(false)

</script>
<template>
	<!-- name of each tab group should be unique -->
	<div role="tablist" class="tabs tabs-lift tabs-sm mt-4">
		<input type="radio" name="my_tabs_6" class="tab" aria-label="lista" checked="checked" />
		<div class="tab-content bg-base-100 border-base-300 p-2">
			<OnwPoislistad :datapois="datapois" />
		</div>

		<input type="radio" name="my_tabs_6" class="tab" aria-label="categorie" />
		<div class="tab-content bg-base-100 border-base-300 p-6">
			<OnwPoiscategorie  :datapois="datapois" />
		</div>

		<input type="radio" name="my_tabs_6" class="tab" aria-label="tabella" />
		<div class="tab-content bg-base-100 border-base-300">
			<OnwPoistabella  :datapois="datapois" />
		</div>
		
		<input type="radio" name="my_tabs_6" class="tab" aria-label="città" />
		<div class="tab-content bg-base-100 border-base-300 p-2">
			<OnwPoiscitta :datapois="datapois" />
		</div>
		
		<input type="radio" name="my_tabs_6" class="tab" aria-label="elenco" />
		<div class="tab-content bg-base-100 border-base-300 p-2">
			<OnwPoiselenco :datapois="datapois" />
		</div>
		
	</div>
</template>
