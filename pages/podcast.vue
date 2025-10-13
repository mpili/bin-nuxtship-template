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
    descrizione:
      "Rikki e Guybrush ogni giovedì ci propongono un nuovo episodio del principale podcast italiano dedicato a Bitcoin.",
  },
  {
    id: "block-time",
    nome: "Bitcoin Italia Podcast",
    url: "/podc/block-time",
    img: "/img/podcast/block-time.jpg",
    descrizione:
      "Marco Costanza per Unspent.it",
  },
  {
    id: "bitcoin-monfalcone-podcast",
    nome: "Bitcoin Monfalcone Podcast",
    url: "/podc/bitcoin-monfalcone-podcast",
    img: "/img/podcast/bitcoin-monfalcone-podcast.jpg",
    descrizione:
      "È il podcast nato dai meetup Bitcoin Monfalcone Podcast",
  },
  {
    id: "il-priorato-del-bitcoin",
    nome: "Il priorato del Bitcoin",
    url: "/podc/il-priorato-del-bitcoin",
    img: "/img/podcast/il-priorato-del-bitcoin.jpg",
    descrizione:
      "Il Priorato del Bitcoin è un podcast in lingua italiana, condotto da Turtlecute, che si rivolge a un pubblico di appassionati e conoscitori del mondo Bitcoin, con un approccio definito tossicamente massimalista dallo stesso autore, si addentra nelle complessità di Bitcoin, trattando temi che spaziano dalla tecnologia blockchain alla privacy e alla sicurezza informatica",
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
    id: "il-truffone",
    nome: "Il truffone",
    url: "/podc/il-truffone",
    img: "/img/podcast/il-truffone.jpg",
    descrizione:
      "Il Podcast di Francesco Carbone per navigare consapevolmente e con successo il più grande esperimento economico di tutti i tempi. C’è qualcosa nell’economia e nella società che non funziona più per il verso giusto: scopri cosa è, quindi impara a difenderti, a sfruttare la situazione a tuo vantaggio e ad orientarti al meglio per trovare la tua soluzione individuale.",
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
      <button class="btn mt-4">Archivio podcast non più aggiornati</button>
    </NuxtLink>
  </LandingContainer>
</template>
