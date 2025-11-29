<script setup>
const props = defineProps(["idcomunita"]);

const today = new Date();
const formattedToday = today.toISOString().split('T')[0];

// const url_api = `https://bin-dev.pockethost.io/api/collections/eventi/records?filter=(id_comunita='${props.idcomunita}')`;
const url_api = `https://bin-dev.pockethost.io/api/collections/eventi/records?filter=(id_comunita='${props.idcomunita}'%20%26%26%20data>="${formattedToday}")&sort=data`;

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});
</script>

<template>
  <div v-if="pending">
    <span></span>
  </div>
  <div v-else>
    <div v-if="data?.items?.length > 0" class="border-1 my-2 rounded shadow p-4">
      <h3 class="text-lg font-bold">
        <NuxtLink to="/eventi"> Eventi </NuxtLink>
      </h3>
      <EventiListacarousel :eventi="data?.items" />
    </div>
    <ComunitaEventipassati :idcomunita="props.idcomunita" />
  </div>
</template>
