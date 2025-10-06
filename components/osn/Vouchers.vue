<script setup>
const props = defineProps(["brandwikidata"]);
const url_api_vouchers = `https://bin-dev.pockethost.io/api/collections/vouchers/records?filter=(value='${props.brandwikidata}')`;
const {
  pending: pending,
  data: dbdata,
  error: error,
} = await useLazyFetch(url_api_vouchers, {
  lazy: true,
  server: false,
});
</script>

<template>
  <span v-if="!pending">
    <span  v-if="dbdata?.items?.length">
      <UiVouchers :dbdata="dbdata" />
    </span>
  </span>
</template>
