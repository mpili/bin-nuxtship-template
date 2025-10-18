<script setup>
const props = defineProps(["datapois"]);
const listaAccordion = ref(false)

</script>
<template>
	<!-- name of each tab group should be unique -->
	<div class="tabs tabs-box mt-4">
		<input type="radio" name="my_tabs_6" class="tab" aria-label="Categorie" checked="checked" />
		<div class="tab-content bg-base-100 border-base-300 p-6">
			<ComunitaPoiscategorie  :datapois="datapois" />
		</div>
		
		<input type="radio" name="my_tabs_6" class="tab" aria-label="Lista" />
		<div class="tab-content bg-base-100 border-base-300 p-6">
			<ComunitaPoislista :datapois="datapois" />
		</div>

		<input type="radio" name="my_tabs_6" class="tab" aria-label="Città" />
		<div class="tab-content bg-base-100 border-base-300 p-6">
			<ComunitaPoiscitta :datapois="datapois" />
		</div>

		<input type="radio" name="my_tabs_6" class="tab" aria-label="Tabella" />
		<div class="tab-content bg-base-100 border-base-300 p-6">
			<ComunitaPoistabella  :datapois="datapois" />
		</div>
	</div>
</template>
