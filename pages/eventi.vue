<script setup>
import NostrZapButton from "~/components/nostr/NostrZapButton.vue";
import { useNostrConfig } from "~/composables/useNostrConfig";

definePageMeta({
  layout: "main",
});

const { relays, npub } = useNostrConfig();
</script>

<template>
  <LandingContainer>
    <EventiPage />

    <NostrZapButton
      :npub="npub"
      :relays="relays"
    />
  </LandingContainer>
</template>
