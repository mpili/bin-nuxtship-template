<script setup>
const isDev = process.dev;

useHead({
  title: "pagina di test per componenti nostr",
});

definePageMeta({
  layout: "main",
});
</script>

<template>
  <LandingContainer>
    <h1>Benvenuto nella pagina di test dei componenti Nostr</h1>
    <ClientOnly>
      <hr />
      <h2>Nostr zap button</h2>
      <nostr-zap-button
        nip05="bin@bitcoinitalianetwork.com"
        url="https://bitcoinitalianetwork.com/nostr"
        relays="wss://relay.primal.net,wss://relay.damus.io,wss://relay.nostr.band,wss://nos.lol"
      ></nostr-zap-button>
      <hr />
      <h2>Nostr like button</h2>
      <nostr-like-button
        relays="wss://relay.primal.net,wss://relay.damus.io,wss://relay.nostr.band,wss://nos.lol"
      ></nostr-like-button>
      <hr />

      <hr />
      <h2>Nostr profile</h2>
      <nostr-profile
        npub="npub1s0mv35668yg7t4jk49zdltkezn0em0s3jpt2qn8mkneurnw2edws0uy9zw"
        relays="wss://relay.primal.net,wss://relay.damus.io,wss://relay.nostr.band,wss://nos.lol"
      ></nostr-profile>
      <hr />
    </ClientOnly>
  </LandingContainer>
</template>
