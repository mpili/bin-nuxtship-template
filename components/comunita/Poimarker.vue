<script setup>
defineProps(["poi"]);
// const url_node  = `/osn/${poi.id}`;
</script>

<template>
  <LMarker :lat-lng="[poi.lat, poi.lon]">
    <LPopup v-if="poi.tags">
      <div v-if="poi.tags.name">
        <NuxtLink :to="'/osn/' + poi.id">
          <span class="text-blue-700 font-semibold">
            {{ poi.tags.name }}
          </span>
          <div class="text-gray-400">
            <OsnTipovenue :tags="poi.tags" />
          </div>
          <div v-if="poi.tags['addr:street']"  class="text-gray-600">
            {{ poi.tags["addr:street"]
            }}<span v-if="poi.tags['addr:housenumber']"
              >, {{ poi.tags["addr:housenumber"] }}
            </span>
          </div>
        </NuxtLink>
      </div>
    </LPopup>
  </LMarker>
</template>
