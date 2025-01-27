<template>
  <a :href="url">
    <img :src="img" class="border-2 rounded-lg w-40 h-18" />
  </a>
</template>
	
<script>
export default {
  name: "LogoLink",
  props: {
    url: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
};
</script>
