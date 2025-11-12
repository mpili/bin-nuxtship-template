<script setup>
const props = defineProps(["datapois"]);
const listaAccordion = ref(false)

</script>
<template>
	<!-- name of each tab group should be unique -->
	<div class="tabs tabs-box mt-4">
		<input type="radio" name="my_tabs_6" class="tab" aria-label="Lista" checked="checked" />
		<div class="tab-content bg-base-100 border-base-300 p-6">
			<OnwPoislistad :datapois="datapois" />
		</div>

		<input type="radio" name="my_tabs_6" class="tab" aria-label="Categorie" />
		<div class="tab-content bg-base-100 border-base-300 p-6">
			<OnwPoiscategorie  :datapois="datapois" />
		</div>

		<input type="radio" name="my_tabs_6" class="tab" aria-label="Tabella" />
		<div class="tab-content bg-base-100 border-base-300 p-6">
			<OnwPoistabella  :datapois="datapois" />
		</div>
		
		<input type="radio" name="my_tabs_6" class="tab" aria-label="Città" />
		<div class="tab-content bg-base-100 border-base-300 p-6">
			<OnwPoiscitta :datapois="datapois" />
		</div>
		
		<input type="radio" name="my_tabs_6" class="tab" aria-label="Elenco" />
		<div class="tab-content bg-base-100 border-base-300 p-6">
			<OnwPoiselenco :datapois="datapois" />
		</div>
		
	</div>
</template>
