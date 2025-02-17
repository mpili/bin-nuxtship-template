<script setup>
const props = defineProps(["idwayosm"]);

const url_api = `https://overpass-api.de/api/interpreter?data=[out:json];way(id:${props.idwayosm});out meta;`;

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
    <div class="my-2 p-4 bg-white shadow overflow-hidden sm:rounded-lg">
      <NuxtLink :to="`/osw/${idwayosm}`">
        <span class="font-bold text-blue-500">{{
          data.elements[0].tags.name
        }}</span>
        <OsnIndirizzo :data="data.elements[0]" />
      </NuxtLink>
      <OswMap :idosm="idwayosm" />
    </div>
  </div>
</template>
