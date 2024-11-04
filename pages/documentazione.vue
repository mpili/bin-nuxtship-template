<script setup>
useHead({
  title: "Documentazione | Bitcoin Italian Network",
  link: [
    {
      rel: 'canonical',
      href: 'https://bitcoinitalianetwork.com/documentazione',
    },
  ],
});

definePageMeta({
  layout: "landing",
});
const risorseDocumentazione = [
  {
    nome: "Glossario Bitcoin",
    url: "https://glossario.bitcoinitalianetwork.com",
  },
  {
    nome: "Raccolta documentazioni Mir Liponi",
    url: "https://github.com/mirserena/risorsebitcoin/blob/main/README.md",
  },
  {
    nome: "Bitcoin in italiano di italiansatoshi",
    url: "https://btcita.substack.com/",
  },
  {
    nome: "Guide di Atlas 21",
    url: "https://atlas21.com/it/learn-it/",
  },
  {
    nome: "Tutorial PlanB Network",
    url: "https://planb.network/it/tutorials",
  },
  {
    nome: "Imparare Bitcoin dalla riga di comando",
    url: "https://github.com/lutxoitalico/Imparare-Bitcoin-dalla-Riga-di-Comando/blob/master/Leggimi.md",
  },
  {
    nome: "Guide di Bitcoin24ore",
    url: "https://bitcoin24ore.com/category/guide/",
  },
  {
    nome: "Raccolta di contenuti (principalmente video) di Pindol",
    url: "https://pindol.medium.com/premessa-1e5254a52475",
  },
  {
    nome: "Risorse Bitcoin in italiano by Tuma",
    url: "https://tumabitcoiner.github.io/risorse.html",
  },
  {
    nome: "Corsi PlanB Network",
    url: "https://planb.network/it/courses",
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

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <div class="mx-auto max-w-md">
        <ul class="space-y-4">
          <li
            v-for="documento of risorseDocumentazione"
            class="flex items-center"
          >
            <svg
              class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="11" />
              <path
                d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                fill="none"
              />
            </svg>
            <p class="ml-4">
              <a
                :href="documento.url"
                class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900"
                target="_blank"
              >
                {{ documento.nome }}
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </LandingContainer>
</template>
