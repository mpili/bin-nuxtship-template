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
  

  <div v-if="!pending">
    <div v-if="dbdata?.items[0]?.img" class="mt-8">
      <img
        :src="
          'https://bin-dev.pockethost.io/api/files/attivita/' +
          dbdata.items[0].id +
          '/' +
          dbdata.items[0].img
        "
      />
    </div>
  </div>
</template>
