<script setup>
const props = defineProps(["poi"]);
const tags = props.poi.tags;
</script>

<template>
  <!-- <div v-if="tags"> -->

  <div>
    <Icon :name="useIconavenue(poi.tags)" size="24" />
  </div>
  <div>
    <NuxtLink :to="usePoiLink(poi)">
      <div>
        <OnwXbtindicator :tags="tags">
          <span class="text-wrap">{{ useTagsname(tags) }}</span>
        </OnwXbtindicator>
      </div>
      <div class="text-xs opacity-60">
        {{ usePoiStreet(poi) }}
        <span class="font-semibold">{{ usePoiCitta(poi) }}</span>
      </div>
    </NuxtLink>
  </div>
  <div>
    {{ useTipovenue(poi.tags) }}
  </div>
</template>
