<script setup>
const props = defineProps(["operator"]);

const url_api_vouchers = `https://bin-dev.pockethost.io/api/collections/vouchers/records?filter=(value='${props.operator}')`;
const {
  pending: pending_voucher,
  data: dbdata_voucher,
  error: error_voucher,
} = await useLazyFetch(url_api_vouchers, {
  lazy: true,
  server: false,
});
</script>

<template>
  <OsnTaglink v-if="operator" tag="operator" :valore="operator">
    <template v-slot:testo>
      <OsnTag
        v-if="operator"
        icona="guidance:office-pod"
        etichetta="Operatore"
        :testo="operator"
      />
    </template>
  </OsnTaglink>
  <OsnVouchers :pending="pending_voucher" :dbdata="dbdata_voucher" />
</template>
