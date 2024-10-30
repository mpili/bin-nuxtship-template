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
    <span v-if="dbdata.items[0].tripadvisor" class="mt-8">
      <OsnSocial
        nome="tripadvisor"
        icona="simple-icons:tripadvisor"
        :value="dbdata.items[0].tripadvisor"
      />
    </span>
  </span>
</template>
