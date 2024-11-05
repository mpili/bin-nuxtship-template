<script setup>
const { tag, value } = useRoute().params;

const url_api = `https://bin-dev.pockethost.io/api/collections/xtags/records?filter=(tag=%22${tag}%22 %26%26 value=%22${value}%22)&perPage=100`;

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
    <XtLista :pois="data.items" />

    <div class="my-4 color-gray-400">
      {{ data.items }}
    </div>
  </div>

  <div class="my-4 color-gray-400">
    {{ url_api }}
  </div>
</template>
