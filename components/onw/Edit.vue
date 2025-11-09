<script setup>
const props = defineProps(["dataosm", "lat", "lon", "datanomninatim", "tags"]);
const address = props.datanomninatim?.address;
</script>
<template>
  <!-- <Icon name="material-symbols:edit-square" /> -->

  <div tabindex="0" class="collapse bg-base-100 border-base-300 border my-4">
    <div class="collapse-title"><Icon name="material-symbols:edit-square" /></div>
    <div class="collapse-content text-sm">
      <p class="text-error-content font-mono text-sm">
        <NuxtLink
          :to="`https://www.openstreetmap.org/edit?${dataosm.type}=${dataosm.id}`"
          class="text-sm text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="btn">OsnMap</button>
        </NuxtLink>
        <OsnXmaps :data="dataosm" :pending="pending" :dbdata="dbdata" />
        <OnwNominatmancanti v-if="address" :address="address" :tags="tags" />
        <OnwNominatvalori v-if="address" :address="address" />
      </p>
    </div>
  </div>
</template>
