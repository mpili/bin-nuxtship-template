<script>

export default {
  props: {
    pending: {
      required: true
    },
    dbdata: {
      required: true
    },
  },
};

</script>

<template>
  <div v-if="!pending" class="mt-8">
    <div v-if="dbdata?.items[0]?.descrizione" v-html="dbdata.items[0].descrizione"></div>
  </div>
</template>
