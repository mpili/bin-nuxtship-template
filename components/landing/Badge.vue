<script>
export default {
  props: {
    icona: {
      type: String,
    },
    testo: {
      type: String,
    },
    coloreicona: {
      type: String,
    },
    coloretesto: {
      type: String,
      default: "black",
    },
    colorebg: {
      type: String,
      default: "white",
    },
  },
};
</script>

<template>
  <div
    class="flex items-center rounded-full border m-1 py-2 pl-3 pr-4 text-xs font-bold gap-1 shadow"
    :class="[`text-${coloretesto} bg-${colorebg}`]"
  >
    <Icon :name="icona" size="28" :color="coloreicona" /> {{ testo }}
  </div>
</template>
