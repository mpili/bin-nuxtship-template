<script setup>
definePageMeta({
  layout: "landing",
});

var { id }  = useRoute().params;
var url_api  = `/data/podc/${id}.json`;

/* This call is performed before hydration */
// var { data } = await useFetch(url_api);

/* This call will only be performed on the client */
var { pending, data } = useFetch(url_api, {
  lazy: true,
  server: false
});

</script>

<template>
  <LandingContainer>
    <p> {{ $route.params.id }}</p>
    <p> {{ id }}</p>
    <p> {{ url_api }}</p>
    <p> {{ data }}</p>
    <!-- <LandingPodc :podc="data" /> -->
  </LandingContainer>
</template>
