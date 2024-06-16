<script>
export default {
  props: {
    etichetta: {
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
      <span class="text-gray-400 w-48">{{ etichetta }}&nbsp;</span>
      <span class="text-gray-800">{{ testo }}</span>
    </div>
	</div>	
</template>