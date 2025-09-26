<script setup>
const props = defineProps(["datapois"]);
const listaAccordion = ref(false)

</script>
<template>
	<label class="swap swap-flip">
      <fieldset class="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
        <label class="label">
          <input type="checkbox" class="toggle" v-model="listaAccordion" />
          raggruppate
        </label>
      </fieldset>
	</label>
	<div v-if="listaAccordion">
		<ComunitaPoislistacc  :datapois="datapois" />
	</div>
	<div v-else :datapois="datapois" >
		<ComunitaPoislistx  :datapois="datapois" />
	</div>
</template>
