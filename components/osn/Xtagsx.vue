<script setup>
const props = defineProps(["idnodosm"]);

const url_api_xtag = `https://bin-dev.pockethost.io/api/collections/xtags/records?filter=(id_nod_osm='${props.idnodosm}')`;
const {
  pending: pending_xtag,
  data: dbdata_xtag,
  error: error_xtag,
} = await useLazyFetch(url_api_xtag, {
  lazy: true,
  server: false,
});
</script>

<template>
  <span v-if="!pending">
    <span v-if="dbdata_xtag">
      <span v-if="dbdata_xtag?.items?.length > 0">
        <div class="card bg-base-100 w-auto shadow-xl mb-4">
          <div class="card-body">
            <p class="card-title">
              <NuxtLink to="/psp">Sistema di pagamento Bitcoin</NuxtLink>
            </p>

            <div class="card-actions">
              <span v-for="item of dbdata_xtag.items" :key="item.id">
                <span v-if="item">
                  <OsnXtagpsp v-if="item.tag == 'psp'" :value="item.value" />
                </span>
              </span>
            </div>
          </div>
        </div>
      </span>
    </span>
  </span>
</template>
