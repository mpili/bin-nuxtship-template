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
      class="bg-primary text-primary-content flex items-center rounded-full border m-1 py-2 pl-2 pr-3 text-xs font-bold gap-1"
    >
      <Icon :name="icona" size="20" /> {{ etichetta }}
    </div>
  </a>
</template>
