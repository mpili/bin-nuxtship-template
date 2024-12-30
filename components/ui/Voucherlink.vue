<template>
  <a :href="url" target="_blank">
    <img
      :src="'/img/store/' + platform + '1000x420.png'"
      class="rounded-lg w-40 h-18"
    />
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
