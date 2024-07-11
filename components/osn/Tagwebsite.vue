<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div v-if="url">
    <a :href="url" target="_blank" rel="noopener">
      <div
        class="flex items-center rounded-full border bg-blue-600 m-1 py-2 px-2 text-xs text-white font-bold gap-1"
      >
        <Icon name="mdi:web" size="20" color="white" /> visita il sito web
      </div>
    </a>
  </div>
</template>
