<script setup>
const url_api =
  "https://bin-dev.pockethost.io/api/collections/eventi/records?sort=data";

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});
</script>

<template>
  <div v-if="pending">
    Loading
    <Icon name="eos-icons:bubble-loading" size="48" color="gray" />
  </div>
  <div v-else>
    <EventiLista :eventi="data.items" />
  </div>
</template>