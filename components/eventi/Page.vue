<script setup>
const url_api = "https://bin-dev.pockethost.io/api/collections/eventi/records?sort=data";

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});
</script>

<template>
  <div v-if="pending">
    Loading
    <Icon name="eos-icons:bubble-loading" size="48" color="gray" />
  </div>
  <div v-else>
    <div v-for="evento of data.items" class="py-2 text-xl">
      <NuxtLink :to="`/evento/${evento.id}`">
        {{ evento.descrizione }}
        <!--
          {{evento.data}}
          {{evento.titolo}}
          {{evento.id_comunita}}
          {{evento.id_nod_osm}}
        -->
      </NuxtLink>
    </div>
  </div>
</template>