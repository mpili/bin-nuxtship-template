<template>
  <div class="avatar">
    <div class="mask mask-squircle w-24">
      <img :src="url" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    url: {
      type: String,
      required: true,
    },
  },
};
</script>
