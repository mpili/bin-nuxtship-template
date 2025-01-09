<script>
export default {
  name: "Test",
  props: {
    etichetta: {
      type: String,
    },
  },
};
</script>
<template>
  <div class="flex flex-col md:flex-row gap-2">
    <div class="flex gap-2">
      <slot name="icona"></slot>
      <span class="text-gray-400 text-sm">{{ etichetta }}</span>
    </div>
    <div class="md:ml-4 text-gray-800">
      <slot name="contenuto"></slot>
    </div>
  </div>
</template>
