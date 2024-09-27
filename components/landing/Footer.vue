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
        titolo: "Mappe",
        path: "/dove",
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
        titolo: "Categorie",
        path: "/ostcount",
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
  <footer
    class="w-full text-gray-700 bg-gray-100 body-font"
    aria-labelledby="footer-heading"
  >
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div
      class="container flex flex-col flex-wrap px-5 py-20 mt-12 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap"
    >
      <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
        <img class="h-20" src="~/assets/img/a06-w.png" alt="Company name" />
        <p class="text-left text-sm leading-6 text-gray-600">
          Il network per connettere gli utenti Bitcoin italiani.
        </p>
        <div class="flex space-x-6 my-3">
          <a
            href="https://x.com/btcitanetwork"
            class="text-gray-400 hover:text-gray-500"
            target="_blank"
          >
            <span class="sr-only">twitter</span>
            <Icon name="ri:twitter-x-fill" size="24" />
          </a>
          <a
            href="https://www.instagram.com/btcitanetwork"
            class="text-gray-400 hover:text-gray-500"
            target="_blank"
          >
            <span class="sr-only">Instagram</span>
            <Icon name="mdi:instagram" size="24" />
          </a>
          <a
            href="https://www.tiktok.com/@btcitanetwork"
            class="text-gray-400 hover:text-gray-500"
            target="_blank"
          >
            <span class="sr-only">Tiktok</span>
            <Icon name="ic:baseline-tiktok" size="24" />
          </a>

          <a
            href="https://www.linkedin.com/company/btcitanetwork/"
            class="text-gray-400 hover:text-gray-500"
            target="_blank"
          >
            <span class="sr-only">Linkedin</span>
            <Icon name="mynaui:brand-linkedin" size="24" />
          </a>

          <a
            href="https://nostr.com/npub1s0mv35668yg7t4jk49zdltkezn0em0s3jpt2qn8mkneurnw2edws0uy9zw"
            class="text-gray-400 hover:text-gray-500"
            target="_blank"
          >
            <span class="sr-only">Nostr</span>
            <Icon name="game-icons:ostrich" size="24" />
          </a>
        </div>
      </div>

      <div
        class="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left"
      >
        <div v-for="item of vocimenu" class="w-full px-4 lg:w-1/4 md:w-1/2">
          <h2
            class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font"
          >
            {{ item.titolo }}
          </h2>
          <nav class="mb-10 list-none">
            <li class="mt-3" v-for="voce of item.voci">
              <a
                :href="voce.path"
                class="text-gray-500 cursor-pointer hover:text-gray-900"
                >{{ voce.titolo }}</a
              >
            </li>
          </nav>
        </div>
      </div>
    </div>

    <div class="bg-slate-800 p-2">
      <!--
      Can we ask you a favor 🙏
      Please keep this backlink on your website if possible.
    -->
      <p class="text-center text-xs text-slate-500 mt-1">
        Based on
        <a
          href="https://github.com/Gr33nW33n"
          target="_blank"
          rel="noopener"
          class="hover:underline"
        >
          Gr33nW33n
        </a>
        with attribution to
        <a
          href="https://web3templates.com"
          target="_blank"
          rel="noopener"
          class="hover:underline"
        >
          Web3Templates
        </a>
      </p>
    </div>
  </footer>
</template>
