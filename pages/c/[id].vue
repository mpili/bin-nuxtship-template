<script setup>
definePageMeta({
  layout: "landing",
});

var { id }  = useRoute().params;
var url_api  = `/data/community/${id}.json`;

var { data } = await useFetch(url_api);

</script>

<template>
  <LandingContainer>
	<LandingCpage :data="data" />
  </LandingContainer>
</template>
