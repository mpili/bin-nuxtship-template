<script>
export default {
  props: {
    dbdata: {
      required: true,
    },
  },
};
</script>
<template>
  <span v-if="dbdata.items">
    <div class="card bg-base-100 w-auto shadow-xl">
      <div class="card-body">
        <p class="card-title">Voucher bitcoin</p>
        <p>Compra con Bitcoin i voucher da usare qui per i tuoi acquisti</p>
        <div class="card-actions">
          <span v-for="item of dbdata.items" :key="item.id">
            <span v-if="item">
              <UiVoucherlink :url="item.url" :platform="item.platform" />
            </span>
          </span>
        </div>
      </div>
    </div>
  </span>
</template>
