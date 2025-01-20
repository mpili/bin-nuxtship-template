<script>
export default {
  props: {
    evento: {
      required: true,
    },
  },
};
</script>
<template>
  <NuxtLink :to="`/evento/${evento.id}`">
    <!-- <UiCard
      :title="useGiornoSettimana(evento.data) + ' ' + useformattaData(evento.data)"
      :description="evento.titolo"
      :imageSrc="useEventoImg(evento)"
    ></UiCard> -->
    <UiEvent
    :event="{
      date: evento?.data,
      title: evento?.titolo,
      image: useEventoImg(evento),
    }"
    />
  </NuxtLink>
</template>

