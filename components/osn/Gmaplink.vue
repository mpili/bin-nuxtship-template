<script>
export default {
  props: {
    etichetta: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="p-4 text-blue-500">
    <a :href="url" target="_blank" class="text-blue-600">
      {{ etichetta }}
    </a>
  </div>
</template>
