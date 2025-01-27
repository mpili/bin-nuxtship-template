<script setup>
useHead({
  title: "PSP Payment Service Provider | Bitcoin Italia Network",
  link: [
    {
      rel: "canonical",
      href: "https://bitcoinitalianetwork.com/psp",
    },
  ],
});

definePageMeta({
  layout: "main",
});

const psp = [
  {
    nome: "Bitcoin People",
    url: "/xt/psp/bitcoinpeople",
    img: "/img/psp/bitcoinpeople.png",
  },
  { nome: "Coinbar Pay", url: "/xt/psp/coinbar", img: "/img/psp/coinbar.png" },
  {
    nome: "inbitcoin",
    url: "/xt/psp/inbitcoin",
    img: "/img/psp/inbitcoin.png",
  },
  {
    nome: "🇨🇭 Swiss Bitcoin Pay",
    url: "/xt/psp/swissbitcoinpay",
    img: "/img/psp/swissbitcoinpay.png",
  },
];

const breadcrumb = computed(() => [
  {
    label: "psp payment service provider",
  },
]);
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>PSP Payment Service Provider</template>
      <template v-slot:desc
        >I sistemi per gestire i pagamenti in Bitcoin</template
      >
    </LandingSectionhead>

    <!-- <LandingMainimg urlimg="/img/features/formazione.jpg" /> -->

    <LandingBreadcrumb :voci="breadcrumb" />

    <div class="flex flex-wrap">
      <div v-for="ipsp of psp" class="m-2">
        <NuxtLink :to="ipsp.url">
          <UiCard
            :title="ipsp.nome"
            :buttonText="ipsp.nome"
            :imageSrc="ipsp.img"
          />
        </NuxtLink>
      </div>
    </div>
  </LandingContainer>
</template>
  