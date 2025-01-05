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
        <span v-for="item of dbdata_xtag.items" :key="item.id">
          <span v-if="item">
            <OsnXtagpsp v-if="item.tag == 'psp'" :value="item.value" />
          </span>
        </span>
      </span>
    </span>
  </span>
</template>
