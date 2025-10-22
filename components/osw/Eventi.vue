<script setup>
const props = defineProps(["idwayosm"]);

const today = new Date();
const formattedToday = today.toISOString().split("T")[0];

// const url_api = `https://bin-dev.pockethost.io/api/collections/eventi/records?filter=(id_way_osm='${props.idwayosm}')`;
const url_api = `https://bin-dev.pockethost.io/api/collections/eventi/records?filter=(id_way_osm='${props.idwayosm}'%20%26%26%20data>="${formattedToday}")&sort=data`;

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});
</script>

<template>
  <div v-if="pending">
    <span class="text-base-300">
      <span class="loading loading-spinner loading-xs"></span>
    </span>
  </div>
  <div v-else>
    <div v-if="data?.items?.length > 0" class="border-1 my-2 rounded shadow p-4">
      <h3 class="text-lg font-bold">
        <NuxtLink to="/eventi" class="text-primary"> Eventi </NuxtLink>
      </h3>
      <EventiLista :eventi="data?.items" />
    </div>
  </div>
  <OswEventipassati :idwayosm="props.idwayosm" />
</template>
