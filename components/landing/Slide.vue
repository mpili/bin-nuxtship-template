<script setup>
import { ref } from "vue";

const carousel = [
  {
    src: "/img/sections/podcast.jpg",
    url: "/podcast",
    titolo: "Podcast",
    classe: "text-black",
  },
  {
    src: "/img/sections/books.jpg",
    url: "/libriamazon",
    titolo: "Libri",
    classe: "text-black",
  },
  {
    src: "/img/sections/wallet.jpg",
    url: "/wallet",
    titolo: "Wallet",
    classe: "text-white",
  },
  {
    src: "/img/sections/merchandising.jpg",
    url: "https://shop.bitcoinitalianetwork.com/en-eur/",
    titolo: "Merchandising",
    classe: "text-black",
  },
];
const indice = ref(1);
indice.value = 0;

const next = () => {
  indice.value = (indice.value + 1) % carousel.length; // Increment and handle wrap-around
};
const prev = () => {
  indice.value = (indice.value - 1) % carousel.length; // Increment and handle wrap-around
};
</script>

<template>
  <div class="grid w-full place-content-center pb-8">
    <div
      class="relative w-full md:max-w-1280 overflow-hidden rounded-md bg-gray-100 p-2 sm:p-4"
    >
      <div
        class="absolute right-5 top-5 z-10 rounded-full bg-gray-600 px-2 text-center text-sm text-white"
      >
        <span>{{ indice + 1 }}</span
        >/<span>{{ carousel.length }}</span>
      </div>

      <button
        @click="prev()"
        class="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md"
      >
        <Icon name="material-symbols:chevron-left-rounded" size="48" />
      </button>

      <button
        @click="next()"
        class="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md"
      >
        <Icon name="material-symbols:chevron-right-rounded" size="48" />
      </button>
      <NuxtLink :to="carousel[indice].url">
        <div
          class="absolute bottom-5 sm:bottom-20 w-full text-center z-10 text-4xl sm:text-8xl font-bold mb-4"
        >
          <span :class="carousel[indice].classe">{{
            carousel[indice].titolo
          }}</span>
        </div>

        <div class="relative">
          <NuxtImg :src="carousel[indice].src" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
