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
      <span v-if="dbdata.items">
        <span v-for="item of dbdata.items" :key="item.id">
          <span v-if="item">
            <OsnXtagpsp v-if="item.tag == 'psp'" :value="item.value" />
          </span>
        </span>
      </span>
    </span>
  </span>
</template>
