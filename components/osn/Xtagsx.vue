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
      <span v-if="dbdata_xtag.items">

          <div class="border border-base-200 p-2">
            <div class="flex items-center gap-1 pb-2">
              <NuxtLink to="/psp" class="text-xs text-primary">Sistema di pagamento Bitcoin</NuxtLink>
            </div>
            
            <div class="flex items-center gap-2">
                <span v-for="item of dbdata_xtag.items" :key="item.id">
                  <span v-if="item">
                    <OsnXtagpsp v-if="item.tag == 'psp'" :value="item.value" />
                  </span>
                </span>
            </div>
          </div>

      </span>
    </span>
  </span>
</template>
