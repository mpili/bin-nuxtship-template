<script setup>
const props = defineProps({
  npub: { type: String, required: true },
  relays: { type: String, required: true },
  url: { type: String, required: false },
});

const currentUrl = props.url || useRequestURL().href;
</script>

<template>
  <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
    <ClientOnly>
      <nostr-zap-button :npub="npub" :relays="relays" :url="currentUrl" />
    </ClientOnly>
  </div>
</template>
