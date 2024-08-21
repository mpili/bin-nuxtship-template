<script setup>

useHead({
  title: 'Harware wallet | Bitcoin Italia Network',
});

const url_api = `https://bin-dev.pockethost.io/api/collections/hardwarewallet/records`;

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

const breadcrumb = computed(() => [
  {
    label: "hardware wallet",
  },
]);

import hwAttributi from "~/assets/data/hw-attributi.json";

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

    <LandingBreadcrumb :voci="breadcrumb" />
    
    <div v-if="pending">
      Loading
      <Icon name="eos-icons:bubble-loading" size="48" color="gray" />
    </div>
    <div v-else>
      <div v-for="hwallet of data.items">
        <HwalletScheda :data="hwallet" />
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-bold leading-7 sm:text-3xl sm:tracking-tight pt-8 pb-2">
        Legenda
      </h2>

      <div v-for="attr of hwAttributi" class="flex gap-4 my-2">
        <Icon :name="attr.icona" size="32" :color="attr.colore" />
        {{ attr.nome }}
      </div>
    </div>
  </LandingContainer>
</template>