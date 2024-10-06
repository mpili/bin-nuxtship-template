<script setup>

const { id }  = useRoute().params;
const url_api  = `/data/wallet/${id}.json`;

/* This call is performed before hydration */
// var { data } = await useFetch(url_api);

/* This call will only be performed on the client */
const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false
});

// this call will be performed server side
// const { data } = await useAsyncData("data", () => $fetch(url_api,));

definePageMeta({
  layout: "landing",
});

</script>

<template>
  <LandingContainer>
    <div v-if="pending">
      Loading ...
    </div>
    <div v-else>
      <WalletPage :data="data" />
    </div>    
  </LandingContainer>
</template>
