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
        class="flex items-center rounded-full border bg-white m-1 py-2 pl-3 pr-4 text-xs text-black font-bold gap-1 shadow"
      >
        <Icon name="mdi:web" size="28" color="#0ac18e" /> Visita il sito Web
      </div>
    </a>
  </div>
</template>
