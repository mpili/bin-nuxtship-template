<script>
export default {
  props: {
    urlimg: {
      type: String,
    },
  },
};
</script>

<template>
  <div class="py-2">
    <NuxtImg :src="urlimg" class="w-full" />
  </div>
</template>
