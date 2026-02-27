<script setup>
const isDev = process.dev;

const titolo = "Pagina test componenti Nostr - [b]"

useHead({
  title: titolo,
});

definePageMeta({
  layout: "main",
});

const relays="wss://relay.primal.net,wss://relay.damus.io,wss://relay.nostr.band,wss://nos.lol,wss://purplepag.es";
const nip05="bin@bitcoinitalianetwork.com";
const npub="npub1s0mv35668yg7t4jk49zdltkezn0em0s3jpt2qn8mkneurnw2edws0uy9zw";
const pubkey="83f6c8d35a3911e5d656a944dfaed914df9dbe119056a04cfbb4f3c1cdcacb5d";
</script>

<template>
  <LandingContainer>
    <h1>{{titolo}}</h1>
      <hr />

      <h2>Zap button</h2>
      <ClientOnly>
        <nostr-zap-button
          :npub="npub"
          url="https://bitcoinitalianetwork.com/nostr"
          :relays="relays"
        ></nostr-zap-button>
        <hr />
      </ClientOnly>

      <h2>Like button</h2>
      <ClientOnly>
        <nostr-like-button
          :relays="relays"
        ></nostr-like-button>
        <hr />
      </ClientOnly>

      <!-- <h2>Post</h2>
      <ClientOnly>
        <nostr-post
          eventId="nevent1qqswfvks5gwxamgqjdujp5f0u3jr0zyxjdjjq65avc6sl0uwcwhh7fgpzemhxue69uhhyetvv9ujuurjd9kkzmpwdejhgq3qs0mv35668yg7t4jk49zdltkezn0em0s3jpt2qn8mkneurnw2edwsenydjd"
          :relays="relays"
        ></nostr-post>
        <hr />
      </ClientOnly> -->

      <h2>Follow button</h2>
      <ClientOnly>
        <nostr-follow-button
          :npub="npub"
          :relays="relays"
          ></nostr-follow-button>
          <hr />
      </ClientOnly>

      <h2>Badge</h2>
      <!-- pubkey="npub1s0mv35668yg7t4jk49zdltkezn0em0s3jpt2qn8mkneurnw2edws0uy9zw" -->
      <ClientOnly>
        <nostr-profile-badge
          :npub="npub"
          :relays="relays"
        ></nostr-profile-badge>
        <hr />
      </ClientOnly>

      <h2>Profile</h2>
      <ClientOnly>
        <nostr-profile
          :npub="npub"
          :relays="relays"
        ></nostr-profile>
        <hr />
      </ClientOnly>

  </LandingContainer>
</template>
