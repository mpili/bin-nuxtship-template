<script setup>
const props = defineProps(["data"]);
</script>
<template>
  <div class="flex gap-2 py-2">
    <a
      :href="'https://www.openstreetmap.org/node/' + data.id"
      target="_blank"
      class="text-sm"
    >
      <LandingBadge
        icona="simple-icons:openstreetmap"
        testo="openstreetmap"
        coloreicona="#9CA3AF"
        coloretesto="neutral"
        colorebg="neutral"
      />
    </a>
    <a
      v-if="data.tags['currency:XBT'] === 'yes'"
      :href="'https://btcmap.org/merchant/node:' + data.id"
      target="_blank"
      class="text- text-sm"
      ><LandingBadge
        icona="hugeicons:bitcoin-location"
        testo="btcmap"
        coloreicona="#9CA3AF"
        coloretesto="neutral"
        colorebg="neutral"
    /></a>
  </div>
</template>