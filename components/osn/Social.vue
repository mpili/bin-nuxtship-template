<script>
export default {
  props: {
    nome: {
      type: String,
      required: true,
    },
    icona: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
  },
};
</script>

<template>
	<p v-if="value">
		<LandingSocial
			:social="nome"
			:value="value"
			:icona="icona"
		/>
	</p>
</template>
