<script>
export default {
  props: {
    icona: {
      type: String,
      required: false
    },    etichetta: {
      type: String,
      required: true
    },
    testo: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
	<div v-if="testo=='yes'">
    <div class="flex items-center gap-1 my-2">
      <Icon v-if="icona" :name="icona" size="16" color="gray" />
      <span class="text-gray-400 w-48">{{ etichetta }}&nbsp;</span>
      <Icon name="material-symbols:check-box-outline" size="16" color="green" />
    </div>
	</div>	
</template>
