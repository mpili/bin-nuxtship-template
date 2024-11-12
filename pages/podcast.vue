<script setup>
useHead({
  title: "Podcast in italiano a tema Bitcoin | Bitcoin Italia Network",
  meta: [
    {
      name: "description",
      content:
        "Podcast in italiano a tema Bitcoin, con appassionati, professionisti e innovatori che condividono la passione per Bitcoin, promuovendo conoscenza e adozione sul territorio.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://bitcoinitalianetwork.com/podcast`,
    },
  ],
});

definePageMeta({
  layout: "landing",
});
const podcasts = [
  {
    id: "bitcoin-italia-podcast",
    nome: "Bitcoin Italia Podcast",
    url: "/podc/bitcoin-italia-podcast",
    img: "/img/podcast/bitcoin-italia-podcast.jpg",
    id: "bitcoin-italia-podcast",
  },
  {
    id: "bitcoin-freedom",
    nome: "Bitcoin Freedom",
    url: "/podc/bitcoin-freedom",
    img: "/img/podcast/bitcoin-freedom.jpg",
  },
  {
    id: "bcaucus",
    nome: "Bcaucus",
    url: "/podc/bcaucus",
    img: "/img/podcast/bcaucus.jpg",
  },
  {
    id: "bitcoin-d-asporto",
    nome: "Bitcoin d’Asporto",
    url: "/podc/bitcoin-d-asporto",
    img: "/img/podcast/bitcoin-d-asporto.jpg",
  },
  {
    id: "sicurezza-bitcoin",
    nome: "Sicurezza Bitcoin",
    url: "/podc/sicurezza-bitcoin",
    img: "/img/podcast/sicurezza-bitcoin.jpg",
  },
  {
    id: "cultura-bitcoin",
    nome: "Cultura Bitcoin",
    url: "/podc/cultura-bitcoin",
    img: "/img/podcast/cultura-bitcoin.jpg",
  },

  {
    id: "aloha-finance-podcast",
    nome: "Aloha Finance Podcast",
    url: "/podc/aloha-finance-podcast",
    img: "/img/podcast/aloha-finance-podcast.jpg",
  },

  {
    id: "bitcoin-cabana",
    nome: "Bitcoin Cabana",
    url: "/podc/bitcoin-cabana",
    img: "/img/podcast/bitcoin-cabana.jpg",
  },
  {
    id: "il-priorato-del-bitcoin",
    nome: "Il priorato del Bitcoin",
    url: "/podc/il-priorato-del-bitcoin",
    img: "/img/podcast/il-priorato-del-bitcoin.jpg",
  },

  {
    id: "the-bitcoin-theory",
    nome: "The Bitcoin Theory",
    url: "/podc/the-bitcoin-theory",
    img: "/img/podcast/the-bitcoin-theory.jpg",
  },
  {
    id: "arancione-podcast",
    nome: "Arancione Podcast",
    url: "/podc/arancione-podcast",
    img: "/img/podcast/arancione-podcast.jpg",
  },

  {
    id: "cripto-il-sole-24-ore",
    nome: "Cripto -  Il Sole 24 Ore",
    url: "/podc/cripto-il-sole-24-ore",
    img: "/img/podcast/cripto-il-sole-24-ore.jpg",
  },
  {
    id: "21mdc",
    nome: "21 Milioni di Chiacchiere",
    url: "/podc/21mdc",
    img: "/img/podcast/21mdc.jpg",
  },
];

const breadcrumb = computed(() => [
  {
    label: "podcast",
  },
]);
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Podcast</template>
      <template v-slot:desc>I podcast Bitcoin in Italia</template>
    </LandingSectionhead>

    <LandingMainimg urlimg="/img/sections/podcast.jpg" />

    <LandingBreadcrumb :voci="breadcrumb" />
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <PodcastScheda v-for="item of podcasts" :podc="item" />
    </div>
  </LandingContainer>
</template>
