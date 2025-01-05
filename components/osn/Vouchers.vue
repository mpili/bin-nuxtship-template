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
  <span v-if="!pending">
    <span  v-if="dbdata?.items?.length">
      <UiVouchers :dbdata="dbdata" />
    </span>
  </span>
</template>
