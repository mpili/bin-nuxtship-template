<script setup>
const props = defineProps(["data"]);
</script>
<template>
  <div class="flex gap-2 py-2">
    <a
      :href="'https://www.openstreetmap.org/relation/' + data.id"
      target="_blank"
      class="text-sm"
    >
      <MainBadge
        icona="simple-icons:openstreetmap"
        testo="openstreetmap"
      />
    </a>
    <a
      v-if="data.tags['currency:XBT'] === 'yes'"
      :href="'https://btcmap.org/merchant/relation:' + data.id"
      target="_blank"
      class="text- text-sm"
      ><MainBadge
        icona="hugeicons:bitcoin-location"
        testo="btcmap"
    /></a>
  </div>
</template>