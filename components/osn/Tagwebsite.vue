<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
	<div v-if="url">
		<div class="flex items-center gap-1">
			<Icon name="mdi:web" size="16" color="gray" />
			<span class="text-gray-400 w-48">Sito web&nbsp;</span>
			<span class="text-gray-800">{{ testo }}</span>
			<a :href="url" target="_blank" class="text-blue-600 text-sm">{{ url }}</a>
		</div>
	</div>	
</template>
