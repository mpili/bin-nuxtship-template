<script setup>
const props = defineProps(["idnodosm"]);

const url_api = `https://overpass-api.de/api/interpreter?data=[out:json];node(id:${props.idnodosm});out meta;`;

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});
</script>

<template>
  <div v-if="pending">
    <span class="loading loading-spinner loading-xs"></span>
  </div>
  <div v-else>
    <OnwCard :data="data.elements[0]" />
  </div>
</template>
