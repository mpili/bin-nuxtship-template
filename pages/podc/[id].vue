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

const isLoading = computed(() => (process.server ? true : pending.value));
  
definePageMeta({
  layout: "main",
});
</script>

<template>
  <LandingContainer>
    <div v-if="isLoading">
      Loading ...
    </div>
    <div v-else>
      <PodcastPage :podc="data" />
    </div>    
  </LandingContainer>
</template>
