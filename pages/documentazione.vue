<script setup>
useHead({
  title: "Documentazione | Bitcoin Italian Network",
  link: [
    {
      rel: "canonical",
      href: "https://bitcoinitalianetwork.com/documentazione",
    },
  ],
});

definePageMeta({
  layout: "main",
});
const risorseDocumentazione = [
  {
    nome: "Glossario Bitcoin",
    descrizione:
      "La definizione di 700 termini, il glossario italiano bitcoin più completo",
    url: "https://glossario.bitcoinitalianetwork.com",
    imgurl: "https://images2.imgbox.com/7e/de/XnHeFiQu_o.jpeg",
  },
  {
    nome: "Bitcoin in italiano",
    descrizione:
      "Creato da italiansatoshi, articoli su temi correlati a bitcoin tradotti in italiano scritti dai protagonisti del settore.",
    url: "https://btcita.substack.com/",
    imgurl: "https://images2.imgbox.com/71/0c/xvs5EgGX_o.png",
  },
  {
    nome: "Checkpoint Bitcoin",
    descrizione:
      "Progetto divulgativo con oltre cento articoli su acquisto, custodia e funzionamento di Bitcoin curato da Fabio Arcieri",
    url: "https://checkpointbitcoin.it/",
    imgurl: "https://images2.imgbox.com/df/0e/1hGwZeiV_o.png",
  },
  {
    nome: "Risorse Bitcoin by Mir Liponi",
    descrizione:
      "Mir, conosciuta come godmother della comunità Bitcoin italiana, propone la sua lista di risorse su Bitcoin in italiano",
    url: "https://github.com/mirserena/risorsebitcoin/blob/main/README.md",
    imgurl: "https://images2.imgbox.com/a2/2f/udnbgDwD_o.jpg",
  },
  {
    nome: "Learn by Atlas 21",
    descrizione:
      "Raccoglie articoli divulgativi e guide pratiche sul mondo Bitcoin e delle criptovalute, focalizzandosi su temi tecnici e operativi.",
    url: "https://atlas21.com/it/learn-it/",
    imgurl: "https://images2.imgbox.com/c9/0f/NmixDwDP_o.png",
  },
  {
    nome: "Tutorial PlanB Network",
    descrizione:
      "Tutorial sull'ecosistema Bitcoin. Una raccolta di guide approfondite suddivise in categorie tematiche.",
    url: "https://planb.network/it/tutorials",
    imgurl: "https://images2.imgbox.com/31/a3/T1VwtCGA_o.png",
  },
  {
    nome: "Imparare Bitcoin dalla riga di comando",
    descrizione:
      "Un corso completo per imparare a usare e programmare Bitcoin (e Lightning) direttamente dalla riga di comando",
    url: "https://github.com/lutxoitalico/Imparare-Bitcoin-dalla-Riga-di-Comando/blob/master/Leggimi.md",
    imgurl: "https://images2.imgbox.com/fd/fb/2eC3aOIC_o.png",
  },
  {
    nome: "Guide di Bitcoin24ore",
    descrizione:
      "Una raccolta di articoli su Bitcoin, sia per principianti che per i più esperti",
    url: "https://bitcoin24ore.com/category/guide/",
    imgurl: "https://images2.imgbox.com/8c/e5/n6UAwVYT_o.png",
  },
  {
    nome: "Raccolta di Pindol",
    descrizione:
      "Una raccolta di risorse prevalentemente in italiano, video, articoli, podcast e playlist curata da Pindol",
    url: "https://pindol.medium.com/premessa-1e5254a52475",
    imgurl: "https://images2.imgbox.com/e1/0c/n93WKLeL_o.jpeg",
  },
  // {
  //   nome: "Risorse Bitcoin in italiano by Tuma",
  //   descrizione: "descrizione bla bla bla",
  //   url: "https://tumabitcoiner.github.io/risorse.html",
  //   imgurl: "/img/features/documentazione.jpg"
  // },
  {
    nome: "Corsi PlanB Network",
    descrizione:
      "Plan ₿ Academy presenta un catalogo di corsi online dedicati all’educazione su Bitcoin e tematiche correlate",
    url: "https://planb.network/it/courses",
    imgurl: "https://images2.imgbox.com/00/b8/bj9YMx71_o.png",
  },
  {
    nome: "Simple Privacy Tips di Giovanni Birindelli",
    descrizione: "Guide pratiche sulla privacy e la sicurezza digitale",
    url: "https://www.simpleprivacytips.com/",
    imgurl: "https://images2.imgbox.com/15/2e/iC0SNT6R_o.png",
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Documentazione</template>
      <template v-slot:desc>Le risorse per tenersi sempre aggiornati</template>
    </LandingSectionhead>

    <LandingMainimg urlimg="/img/features/documentazione.jpg" />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
      <div v-for="documento of risorseDocumentazione">
        <NuxtLink :to="documento.url">
          <UiCard
            :title="documento.nome"
            :description="documento.descrizione"
            :imageSrc="documento.imgurl"
          ></UiCard>
        </NuxtLink>
      </div>
    </div>
  </LandingContainer>
</template>
