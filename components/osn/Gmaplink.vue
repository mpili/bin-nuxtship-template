<script>
export default {
  props: {
    pending: {
      required: true,
    },
    dbdata: {
      required: true,
    },
  },
};
</script>

<template>
  <span v-if="!pending" class="mt-8">
    <span v-if="dbdata?.items[0]?.gmap">
      <a
        :href="dbdata?.items[0]?.gmap"
        target="_blank"
        rel="noopener"
        class="text-green-600 font-bold"
      >google</a>
    </span>
    <span v-else>google</span>
  </span>
  <span v-else>google</span>
</template>
