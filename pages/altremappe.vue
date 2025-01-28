<script setup>
definePageMeta({
  layout: "main",
});

const mappe = [
  {
    nome: "BTC Map",
    titololink: "btcmap.org",
    url: "https://btcmap.org/map",
    img: "/img/dove/btcmap_org1000x420.png",
    descrizione:
      "In inglese, oltre che come sito web è disponibile anche come app mobile",
    tags: ["openstreetmap"],
  },
  {
    nome: "Coinmap it",
    titololink: "coinmap.it",
    url: "https://coinmap.it/",
    img: "/img/dove/coinmap_it1000x420.png",
    descrizione: "In diverse lingue tra le quali l'italiano",
    tags: ["openstreetmap"],
  },

  {
    nome: "Map Bitcoin.com",
    titololink: "map.bitcoin.com",
    url: "https://map.bitcoin.com/",
    img: "/img/dove/map_bitcoin_com1000x420.png",
    descrizione: "In inglese, i contenuti non sono aggiornati",
    tags: ["google maps"],
  },
  {
    nome: "Coin ATM radar",
    titololink: "coinatmradar.com",
    url: "https://coinatmradar.com/",
    img: "/img/dove/coinatmradar1000x420.png",
    descrizione: "Dedicato agli ATM per acquistare bitcoin",
    tags: ["openstreetmap"],
  },
  {
    nome: "Qui Bitcoin",
    titololink: "quibitcoin.it",
    url: "https://www.quibitcoin.it",
    img: "/img/dove/quibitcoin_it1000x420.png",
    descrizione: "In italiano. Contiene banner pubblicitari",
    tags: ["mapquest", "openstreetmap"],
  }, // {
  // 	nome: "Coinmap org",
  // 	titololink: "coinmap.org",
  // 	url: "https://coinmap.org/view/",
  // 	img: "/img/dove/coinmap-org1000x420.png",
  // },
  // {
  //   nome: "Aggiungi la tua attività",
  //   titololink: "Aggiungi la tua attività qui",
  //   url: "https://forms.zohopublic.eu/bitcoinitalianetwork/form/InserimentoAttivit/formperma/pF37EKjAUOJY4-Hw3dE3iyeC5Pr1lW9NqeME-gVGaww",
  //   img: "/img/dove/add-your-here1000x420.png",
  // },
];

useHead({
  title: "Altre mappe di esercenti bitcoin" + " | Bitcoin Italia Network",
  meta: [
    {
      name: "description",
      content: "Altre mappe degli esercenti che accettano Bitcoin in Italia.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://bitcoinitalianetwork.com/dove",
    },
  ],
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Altre mappe</template>
      <template v-slot:desc
        >Mappe di esercenti Bitcoin sul territorio Italiano fornite da altri
        siti.</template
      >
    </LandingSectionhead>

    <LandingMainimg urlimg="/img/features/dove.jpg" />

    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <AltremappeSito v-for="item of mappe" :dove="item" />
    </div>
  </LandingContainer>
</template>