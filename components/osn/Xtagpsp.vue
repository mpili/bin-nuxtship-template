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
	<!-- <OsnLabellinktag
		icona="mdi:web"
		etichetta="Sistema di pagamento Bitcoin"
		:url="'/xt/psp/'+value"
		:testo="value"
	/> -->
  <UiLogoLink
    :url="'/xt/psp/'+value"
    :img="'/img/psp/'+value+'.svg'"
  />
  </div>
</template>
