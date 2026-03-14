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

const isLoading = computed(() => (process.server ? true : pending.value));

definePageMeta({
  layout: "main",
});

</script>

<template>
  <LandingContainer>
    <div v-if="isLoading">
      <UiSkeleton />
    </div>
    <div v-else>
      <MeetupPage :meetup="data.items[0]" />
    </div>
  </LandingContainer>
</template>
