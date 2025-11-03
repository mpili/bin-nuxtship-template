<script setup>
const props = defineProps(["provincia"]);

const today = new Date();
const formattedToday = today.toISOString().split("T")[0];

const url_api = `https://bin-dev.pockethost.io/api/collections/eventi/records?filter=(provincia='${props.provincia}'%20%26%26%20data<"${formattedToday}")&sort=-data`;

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
    <div v-if="data?.items?.length > 0" >
      <EventiPassati :eventi="data?.items" />
    </div>
  </div>
</template>
