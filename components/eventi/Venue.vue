<script setup>
const props = defineProps(["idnodosm"]);

const url_api = `https://overpass-api.de/api/interpreter?data=[out:json];node(id:${props.idnodosm});out meta;`;

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});
</script>

<template>
  <div v-if="pending">...</div>
  <div v-else>
    <OsnMap :data="data.elements[0]" />
    <NuxtLink :to="`/osn/${data.elements[0].id}`">
      <span class="font-bold text-blue-500">{{
        data.elements[0].tags.name
      }}</span>
      <OsnIndirizzo :data="data.elements[0]" />
    </NuxtLink>
  </div>
</template>
