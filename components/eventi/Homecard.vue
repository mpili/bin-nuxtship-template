<script>
export default {
  props: {
    evento: {
      required: true,
    },
  },
  methods: {
    formattaData(data) {
      const d = new Date(data);
      return d.toLocaleDateString("it-IT");
    },
  },
};
</script>
<template>
	<UiCard
		:title="formattaData(evento.data)"
		:description="evento.titolo"
		:imageSrc="useEventoImg(evento)"
	></UiCard>
</template>

