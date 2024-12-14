<script setup>

const today = new Date();
const tenDaysLater = new Date(today);
tenDaysLater.setDate(today.getDate() + 10);

const formattedToday = today.toISOString().split('T')[0];
const formattedTenDaysLater = tenDaysLater.toISOString().split('T')[0];

const url_api = `https://bin-dev.pockethost.io/api/collections/eventi/records?sort=data&filter=(data%3E=%22${formattedToday}%22)`;

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
    <EventiLista :eventi="data.items" />
  </div>
</template>
