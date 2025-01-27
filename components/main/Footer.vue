<script setup>
const vocimenu = [
  {
    titolo: "Dove",
    voci: [
      {
        titolo: "Comunità",
        path: "/comunita",
      },
      {
        titolo: "Categorie",
        path: "/categorie",
      },
      {
        titolo: "Altre mappe",
        path: "/altremappe",
      },
      {
        titolo: "E-shop",
        path: "/shop",
      },
    ],
  },
  {
    titolo: "Cosa",
    voci: [
      {
        titolo: "Glossario",
        path: "https://glossario.bitcoinitalianetwork.com/",
      },

      {
        titolo: "Impara",
        path: "/impara",
      },
      {
        titolo: "Libri",
        path: "/libriamazon",
      },
      {
        titolo: "Documenti",
        path: "/documentazione",
      },
      {
        titolo: "Wallet",
        path: "/wallet",
      },
      {
        titolo: "Hardware Wallet",
        path: "/hwallet",
      },
    ],
  },
  {
    titolo: "Quando",
    voci: [
      {
        titolo: "Eventi",
        path: "/eventi",
      },
      {
        titolo: "Calendari",
        path: "/calendari",
      },
      {
        titolo: "Podcast",
        path: "/podcast",
      },
    ],
  },
  {
    titolo: "Chi",
    voci: [
      {
        titolo: "Chi siamo",
        path: "/chisiamo",
      },

      {
        titolo: "Contattaci",
        path: "/contattaci",
      },
      {
        titolo: "Shop",
        path: "https://shop.bitcoinitalianetwork.com/en-eur/",
      },
    ],
  },
];
</script>
<template>
  <footer class="footer bg-base-200 text-base-content p-10 mt-4">
    <nav v-for="item of vocimenu">
      <h6 class="footer-title">{{ item.titolo }}</h6>
      <a v-for="voce of item.voci" :href="voce.path" class="link link-hover">{{
        voce.titolo
      }}</a>
    </nav>
  </footer>
  <footer
    class="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4"
  >
    <aside class="grid-flow-col items-center">
      <img class="h-20" src="~/assets/img/a06-w.png" alt="BIN logo" />
      <p>
        Bitcoin Italia Network
        <br />
        Il network per connettere la Comunità Bitcoin italiana
      </p>
    </aside>
    <nav class="md:place-self-center md:justify-self-end">
      <div class="grid grid-flow-col gap-4">
        <MainThemeswitch />
        <a href="https://x.com/btcitanetwork" target="_blank">
          <span class="sr-only">twitter</span>
          <Icon name="ri:twitter-x-fill" size="24" />
        </a>
        <a href="https://www.instagram.com/btcitanetwork" target="_blank">
          <span class="sr-only">Instagram</span>
          <Icon name="mdi:instagram" size="24" />
        </a>
        <a href="https://www.tiktok.com/@btcitanetwork" target="_blank">
          <span class="sr-only">Tiktok</span>
          <Icon name="ic:baseline-tiktok" size="24" />
        </a>
        <a
          href="https://njump.me/npub1s0mv35668yg7t4jk49zdltkezn0em0s3jpt2qn8mkneurnw2edws0uy9zw"
          target="_blank"
        >
          <span class="sr-only">Nostr</span>
          <Icon name="game-icons:ostrich" size="24" />
        </a>
        <a
          href="https://www.linkedin.com/company/btcitanetwork/"
          target="_blank"
        >
          <span class="sr-only">Linkedin</span>
          <Icon name="mynaui:brand-linkedin" size="24" />
        </a>
      </div>
    </nav>
  </footer>
</template>
