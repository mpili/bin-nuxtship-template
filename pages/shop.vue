<script setup>
useHead({
  title: "Siti dove acquistare in Bitcoin | Bitcoin Italia Network",
  link: [
    {
      rel: "canonical",
      href: "https://bitcoinitalianetwork.com/shop",
    },
  ],
});

definePageMeta({
  layout: "main",
});

const stores = [
  {
    nome: "TheBitcoinCompany",
    titololink: "thebitcoincompany.com",
    url: "https://app.thebitcoincompany.com/giftcard",
    img: "/img/store/thebitcoincompany1000x420.png",
  },
  {
    nome: "Bitrefill",
    titololink: "bitrefill.com",
    url: "https://www.bitrefill.com/it/it/",
    img: "/img/store/bitrefill1000x420.png",
  },
  {
    nome: "Coinsbee",
    titololink: "coinsbee.com",
    url: "https://www.coinsbee.com/it/",
    img: "/img/store/coinsbee1000x420.png",
  },
  {
    nome: "Beebit",
    titololink: "beebit.store",
    url: "https://beebit.store/",
    img: "/img/store/beebit1000x420.png",
  },
  {
    nome: "Bitcoin Travel",
    titololink: "bitcoin.travel",
    url: "https://bitcoin.travel/",
    img: "/img/store/bitcointravel1000x420.png",
  },
  {
    nome: "Shopinbit",
    titololink: "shopinbit.com",
    url: "https://shopinbit.com/",
    img: "/img/store/shopinbit1000x420.png",
  },

  {
    nome: "Coincards",
    titololink: "coincards.com",
    url: "https://coincards.com/eu/product-attribute/country-availability/italy/",
    img: "/img/store/coincards1000x420.png",
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Shop on line</template>
      <template v-slot:desc>Comprare on line pagando con Bitcoin.</template>
    </LandingSectionhead>
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <LandingStore v-for="item of stores" :store="item" />
    </div>
  </LandingContainer>
</template>
