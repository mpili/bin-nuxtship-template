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
    icona: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <a :href="url" target="_blank" rel="noopener">
    <div
      class="flex items-center rounded-full border bg-green-500 m-1 py-2 px-2 text-xs text-white font-bold gap-1"
    >
      <Icon :name="icona" size="20" color="white" /> {{ etichetta }}
    </div>
  </a>
</template>
