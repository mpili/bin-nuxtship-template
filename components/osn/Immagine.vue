<script setup>
const props = defineProps(["idnodosm"]);

const url_api = `https://bin-dev.pockethost.io/api/collections/attivita/records?filter=(id_nod_osm='${props.idnodosm}')`;

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});
</script>

<template>
  <div v-if="!pending" class="mt-8">
    <img v-if="data?.items[0]?.img"
      :src="
        'https://bin-dev.pockethost.io/api/files/attivita/' +
        data.items[0].id +
        '/' +
        data.items[0].img
      "
    />
  </div>
</template>
