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
    id: "cultura-bitcoin",
    nome: "Cultura Bitcoin",
    url: "/podc/cultura-bitcoin",
    img: "/img/podcast/cultura-bitcoin.jpg",
    descrizione:
      "Cultura Bitcoin nasce per contribuire ad accendere l'interesse tecno-socio-finanziario verso Bitcoin, la moneta decentralizzata che sta cambiando il mondo. Ogni settimana, un nuovo episodio con ospiti speciali e approfondimenti su Bitcoin e le sue applicazioni.",
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

];

const breadcrumb = computed(() => [
  {
    label: "podcast",
        path: "/podcast",
  },
  {
    label: "archivio",
  },
]);
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Podcast</template>
      <template v-slot:desc>I podcast Bitcoin in Italia</template>
    </LandingSectionhead>

    <LandingMainimg urlimg="/img/sections/podcastarchivio.jpg" />

    <LandingBreadcrumb :voci="breadcrumb" />
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <PodcastScheda v-for="item of podcasts" :podc="item" />
    </div>
  </LandingContainer>
</template>
