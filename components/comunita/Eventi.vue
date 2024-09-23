<script setup>
const props = defineProps(["idcomunita"]);

const url_api = `https://bin-dev.pockethost.io/api/collections/eventi/records?filter=(id_comunita='${props.idcomunita}')`;

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});
</script>

<template>
  <div v-if="pending">
    <span class="text-gray-400">...</span>
  </div>
  <div v-else>
    <div v-if="data?.items?.length > 0" class="border-1 my-2 rounded shadow p-4">
      <h3 class="text-lg font-bold">
        <NuxtLink to="/eventi" class="text-blue-700"> Eventi </NuxtLink>
      </h3>
      <EventiLista :eventi="data?.items" />
    </div>
  </div>
</template>