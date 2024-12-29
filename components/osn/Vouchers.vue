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

      <!-- <span v-if="dbdata.items">
        <div class="card bg-base-100 w-96 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Voucher</h2>
            <p>Qui puoi pagare in bitcoin tramite voucher</p>
            <div class="card-actions">
              <span v-for="item of dbdata.items" :key="item.id">
                <span v-if="item">
                  <UiVoucherlink :url="item.url" :platform="item.platform" />
                </span>
              </span>
            </div>
          </div>
        </div>
      </span> -->

    </span>
  </span>
</template>
