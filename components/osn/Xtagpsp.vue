<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div v-if="value">
	<OsnLabellinktag
		icona="mdi:web"
		etichetta="Sistema di pagamento Bitcoin"
		url="/xt/psp/coinbar"
		:testo="value"
	/>
  </div>
</template>
