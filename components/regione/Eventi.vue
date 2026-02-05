<script setup>
const props = defineProps(["regione"]);

const today = new Date();
const formattedToday = today.toISOString().split('T')[0];

const url_api = `https://bin-dev.pockethost.io/api/collections/eventi/records?sort=data&filter=(data%3E=%22${formattedToday}%22 %26%26 regione='${props.regione}')`;

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});
</script>

<template>
  <div v-if="pending">
    <UiSkeletonlines />
  </div>
  <div v-else>
    <div v-if="data?.items?.length > 0" class="border-1 my-2 rounded shadow p-4">
      <h3 class="text-lg font-bold">
        <NuxtLink to="/eventi"> Eventi </NuxtLink>
      </h3>
      <EventiListacarousel :eventi="data?.items" />
    </div>
  </div>
  <RegioneEventipassati :regione="regione" />
</template>
