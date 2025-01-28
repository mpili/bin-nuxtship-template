<script>
export default {
  name: "Tag",
  props: {
    etichetta: {
      type: String,
    },
  },
};
</script>
<template>
  <div class="flex flex-col md:flex-row my-2">
    <div class="flex gap-2">
      <slot name="icona"></slot>
      <span class="w-48 text-sm">{{ etichetta }}</span>
    </div>
    <div class="md:ml-4">
      <slot name="contenuto"></slot>
    </div>
  </div>
</template>
