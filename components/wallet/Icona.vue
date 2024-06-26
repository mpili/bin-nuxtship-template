<script>
export default {
  props: {
    icona: {
      type: String,
      required: false,
    },
    campo: {
      type: String,
      required: true,
    },
	colore: {
		type: String,
		required: false
	}
  },
};
</script>

<template>
	<span class="w-4">
		<Icon v-if="campo" :name="icona" size="16" :color="colore" />
		<Icon v-else :name="icona" size="16" color="#eee" />
	</span>
</template>