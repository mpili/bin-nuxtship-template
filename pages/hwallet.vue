<script setup>
const url_api = `https://bin-dev.pockethost.io/api/collections/hardwarewallet/records`;

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Hardware Wallet</template>
      <template v-slot:desc>I device per gestire i tuoi fondi.</template>
    </LandingSectionhead>
	<div v-if="pending">
      Loading ...
    </div>
    <div v-else>
      <div v-for="hwallet of data.items">
		<HwalletScheda :data="hwallet" />
      </div>
    </div>   
  </LandingContainer>
</template>