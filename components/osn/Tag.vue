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
	<div v-if="testo">
    <div class="flex items-center gap-1">
      <Icon v-if="icona" :name="icona" size="16" color="gray" />
      <span class="text-gray-400 w-48">{{ etichetta }}&nbsp;</span>
      <span class="text-gray-800">{{ testo }}</span>
    </div>
	</div>	
</template>