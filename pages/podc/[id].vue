<script setup>

const route = useRoute();
const { id }  = route.params;
const url_api  = `/data/podc/${id}.json`;

/* This call is performed before hydration */
// const { data } = await useFetch(url_api);

/* This call will only be performed on the client */
const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false
});
  
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
      <PodcastPage :podc="data" />
    </div>    
  </LandingContainer>
</template>
