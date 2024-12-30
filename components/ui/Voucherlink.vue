<template>
  <a :href="url" :class="`voucherlink ${platform}`" target="_blank">
	<button class="btn join-item">{{ platform }}</button>
  </a>
</template>
  
  <script>
export default {
  name: "Voucherlink",
  props: {
    url: {
      type: String,
      required: true,
    },
    platform: {
      type: String,
      required: true,
    },
  },
};
</script>
