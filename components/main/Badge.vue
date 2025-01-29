<script>
export default {
  props: {
    icona: {
      type: String,
    },
    testo: {
      type: String,
    },
  },
};
</script>

<template>
  <div
    class="flex items-center rounded-full border m-1 py-2 pl-3 pr-4 text-xs font-bold gap-1 shadow"
  >
    <Icon :name="icona" size="28" /> {{ testo }}
  </div>
</template>
