<script setup>
defineProps(["poi"]);
// const url_node  = `/osn/${poi.id}`;
</script>

<template>
  <!-- <LCircle v-if="poi?.tags['currency:XBT']=='yes'"
    :lat-lng="[usePoiLat(poi), usePoiLon(poi)]"
    :radius="100"
    :color="'yellow'"
  /> -->
  <!-- <LCircle v-if="poi?.tags['currency:XBT']=='yes'"
    :lat-lng="[usePoiLat(poi), usePoiLon(poi)]"
    :radius="10"
    :color="'orange'"
  /> -->
  <LMarker :lat-lng="[usePoiLat(poi), usePoiLon(poi)]">
    <LIcon  v-if="poi?.tags['currency:XBT']=='yes'"
      icon-url="/img/poimarkerorange.png"
      :icon-size="[25, 41]"
    />
   <LIcon v-else
      icon-url="/img/poimarker.png"
      :icon-size="[25, 41]"
    />
    <LPopup v-if="poi.tags">
      <div v-if="poi.tags.name">
        <!-- <NuxtLink :to="'/osn/' + poi.id"> -->
        <NuxtLink :to="usePoislug(poi)">
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
