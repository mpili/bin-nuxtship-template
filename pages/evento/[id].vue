<script setup>
import NostrZapButton from "~/components/nostr/NostrZapButton.vue";
import { useNostrConfig } from "~/composables/useNostrConfig";

const { relays, npub } = useNostrConfig();

const { id } = useRoute().params;
const url_api = `https://bin-dev.pockethost.io/api/collections/eventi/records?filter=(id='${id}')`;

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

definePageMeta({
  layout: "main",
});
</script>
<template>
  <LandingContainer>
    <div v-if="pending">
      <UiSkeleton />
      <!-- Loading
      <Icon name="eos-icons:bubble-loading" size="48" color="gray" /> -->
    </div>
    <div v-else-if="data?.items?.length > 0">
      <EventiEvento :evento="data?.items[0]" />

      <div class="mt-8">
        <NostrZapButton
          :npub="npub"
          :relays="relays"
        />
      </div>
    </div>
    <div v-else class="text-center py-20">
      <h1 class="text-4xl font-bold mb-4">Evento non trovato</h1>
      <p class="text-gray-600 mb-8">L'evento che stai cercando non esiste o è stato rimosso.</p>
      <NuxtLink to="/eventi" class="text-blue-600 hover:underline">Torna all'elenco eventi</NuxtLink>
    </div>
  </LandingContainer>
</template>
