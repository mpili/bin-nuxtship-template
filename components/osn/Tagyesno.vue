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
    <div class="flex items-center gap-1">
      <Icon v-if="icona" :name="icona" size="16" />
      <span class="w-48 text-sm">{{ etichetta }}&nbsp;</span>
      <Icon name="material-symbols:check-box-outline" size="16" color="green" />
    </div>
	</div>	
</template>
