<script setup>
const titolo = "Pagina test componenti Nostr - [2026-03-01 b]";

useHead({
  title: titolo,
});

definePageMeta({
  layout: "main",
});

const relays =
  "wss://relay.primal.net,wss://relay.damus.io,wss://nos.lol,wss://relay.nostr.band,wss://purplepag.es,wss://offchain.pub,wss://nostr.wine,wss://relay.nostr.net,wss://nostr-pub.wellorder.net,wss://relay.getalby.com";
const nip05 = "bin@bitcoinitalianetwork.com";
const npub = "npub1s0mv35668yg7t4jk49zdltkezn0em0s3jpt2qn8mkneurnw2edws0uy9zw";
const pubkey =
  "83f6c8d35a3911e5d656a944dfaed914df9dbe119056a04cfbb4f3c1cdcacb5d";

// Monta i componenti problematici solo dopo che il client è pronto
const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <LandingContainer>
    <h1>{{ titolo }}</h1>
    <hr />

    <!-- Post non sembra funzionare -->
    <NostrPost />

    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <h2 class="text-2xl font-bold text-center">Zap button</h2>
      <ClientOnly>
        <nostr-zap-button
          :npub="npub"
          url="https://bitcoinitalianetwork.com/nostr"
          :relays="relays"
        ></nostr-zap-button>
      </ClientOnly>
    </div>

    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <h2 class="text-2xl font-bold text-center">Like button</h2>
      <ClientOnly>
        <nostr-like-button :npub="npub" :relays="relays"></nostr-like-button>
      </ClientOnly>
    </div>

    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <h2 class="text-2xl font-bold text-center">Follow button</h2>
      <ClientOnly>
        <nostr-follow-button
          :npub="npub"
          show-avatar="true"
          :relays="relays"
        ></nostr-follow-button>
      </ClientOnly>
    </div>

    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <h2 class="text-2xl font-bold text-center">Badge</h2>
      <!-- pubkey="npub1s0mv35668yg7t4jk49zdltkezn0em0s3jpt2qn8mkneurnw2edws0uy9zw" -->
      <ClientOnly>
        <nostr-profile-badge
          :npub="npub"
          :relays="relays"
        ></nostr-profile-badge>
      </ClientOnly>
    </div>

    <div>
      <h2 class="text-2xl font-bold text-center">Profile</h2>
      <ClientOnly>
        <nostr-profile :npub="npub" :relays="relays"></nostr-profile>
      </ClientOnly>
    </div>

    <hr />


    <!-- Livestream non funziona -->
    <!-- <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <h2 class="text-2xl font-bold text-center">Livestream</h2>
      <template v-if="isMounted">
        <nostr-livestream
          naddr="naddr1qqf8x7tww35xgunpvahkuttxd9jhycm9qy88wumn8ghj7mn0wvhxcmmv9upzqp0xq9vlrc9xedj054elc847xhuct2t4mml86atq8ldear8a8qe5qvzqqqrkvu7f0r0m"
          show-participants="true"
          show-participant-count="true"
          auto-play="false"
        ></nostr-livestream>
      </template>
    </div>
    <hr /> -->

    <a
      href="https://nostr-components.web.app/?path=/docs/nostr-components--docs"
      class="link"
      >Documentazione Nostr Components</a
    >
  </LandingContainer>
</template>
