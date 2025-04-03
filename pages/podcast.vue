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
  layout: "main",
});
const podcasts = [
  {
    id: "21mdc",
    nome: "21 Milioni di Chiacchiere",
    url: "/podc/21mdc",
    img: "/img/podcast/21mdc.jpg",
    descrizione:
      "il podcast nato dalle registrazioni delle ospitate nell'omonimo Space su X/Twitter alle quali si aggiungono, ogni venerdì, un episodio con Plak e Mauro che commentano un termine del glossario Bitcoin",
  },
  {
    id: "bitcoin-italia-podcast",
    nome: "Bitcoin Italia Podcast",
    url: "/podc/bitcoin-italia-podcast",
    img: "/img/podcast/bitcoin-italia-podcast.jpg",
    id: "bitcoin-italia-podcast",
    descrizione:
      "Rikki e Guybrush ogni giovedì ci propongono un nuovo episodio del principale podcast italiano dedicato a Bitcoin.",
  },
  {
    id: "bitcoin-freedom",
    nome: "Bitcoin Freedom",
    url: "/podc/bitcoin-freedom",
    img: "/img/podcast/bitcoin-freedom.jpg",
    descrizione:
      "Massimo Musumeci, super esperto Lightning Network, il lunedì in compagnia di Federico Rivi, commentano eventi legati a Bitcoin in primo piano nella settimana",
  },
  {
    id: "cripto-il-sole-24-ore",
    nome: "Cripto -  Il Sole 24 Ore",
    url: "/podc/cripto-il-sole-24-ore",
    img: "/img/podcast/cripto-il-sole-24-ore.jpg",
    descrizione:
      "Vito Lops è riuscito a creare un podcast pluri premiato che racconta Bitcoin e le criptovalute con ospiti speciali.",
  },
  {
    id: "bcaucus",
    nome: "Bcaucus",
    url: "/podc/bcaucus",
    img: "/img/podcast/bcaucus.jpg",
    descrizione:
      "Bcaucus è un'assemblea mensile dedicata al mondo di Bitcoin, criptovalute e blockchain. Esperti del settore si riuniscono per discutere e confrontarsi su queste tematiche, rispondendo a domande e analizzando le notizie più rilevanti. L'obiettivo è immaginare insieme il futuro della blockchain, partendo dall'analisi del presente.",
  },
  {
    id: "cultura-bitcoin",
    nome: "Cultura Bitcoin",
    url: "/podc/cultura-bitcoin",
    img: "/img/podcast/cultura-bitcoin.jpg",
    descrizione:
      "Cultura Bitcoin nasce per contribuire ad accendere l'interesse tecno-socio-finanziario verso Bitcoin, la moneta decentralizzata che sta cambiando il mondo. Ogni settimana, un nuovo episodio con ospiti speciali e approfondimenti su Bitcoin e le sue applicazioni.",
  },
  {
    id: "il-truffone",
    nome: "Il truffone",
    url: "/podc/il-truffone",
    img: "/img/podcast/il-truffone.jpg",
  },

  {
    id: "bitcoin-cabana",
    nome: "Bitcoin Cabana",
    url: "/podc/bitcoin-cabana",
    img: "/img/podcast/bitcoin-cabana.jpg",
  },
  {
    id: "aloha-finance-podcast",
    nome: "Aloha Finance Podcast",
    url: "/podc/aloha-finance-podcast",
    img: "/img/podcast/aloha-finance-podcast.jpg",
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
    <NuxtLink to="/podcastarchivio">
      <button class="btn">Archivio podcast non più aggiornati</button>
    </NuxtLink>
  </LandingContainer>
</template>
