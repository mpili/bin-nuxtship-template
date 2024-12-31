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
    <span v-if="dbdata">
      <UiVouchers :dbdata="dbdata" />
    </span>
  </span>
</template>
