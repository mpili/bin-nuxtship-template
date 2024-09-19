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
  <div v-if="!pending">
    <div
      v-if="dbdata?.items[0]?.descrizione"
      class="mt-8"
      v-html="dbdata.items[0].descrizione"
    ></div>
  </div>
</template>
