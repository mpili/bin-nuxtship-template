<script setup>

const { id }  = useRoute().params;
const url_api  = `/data/localita/${id}.json`;

/* This call is performed before hydration */
// var { data } = await useFetch(url_api);

/* This call will only be performed on the client */
const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false
});

definePageMeta({
  layout: "main",
});

</script>

<template>
  <LandingContainer>
    <div v-if="pending">
      <UiSkeleton />
    </div>
    <div v-else>
      <LocalitaPage :data="data" />
    </div>    
  </LandingContainer>
</template>
