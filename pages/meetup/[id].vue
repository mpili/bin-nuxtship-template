<script setup>
const { id } = useRoute().params;
const url_api = `https://bin-dev.pockethost.io/api/collections/meetup/records?filter=(idmeetup='${id}')`;

/* This call is performed before hydration */
// var { data } = await useFetch(url_api);

/* This call will only be performed on the client */
const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

definePageMeta({
  layout: "main",
});

</script>

<template>
  <LandingContainer>
    <div v-if="pending">
      Loading
      <Icon name="eos-icons:bubble-loading" size="48" color="gray" />
    </div>
    <div v-else>
      <MeetupPage :meetup="data.items[0]" />
    </div>
  </LandingContainer>
</template>
