<script setup>
const props = defineProps(["poi"]);
const tags = props.poi.tags;
</script>

<template>
  <div v-if="tags">
    <NuxtLink :to="usePoiLink(poi)">
      <OnwXbtindicator :tags="tags">
        <div class="flex flex-wrap p-2 border-1 my-2 rounded shadow">
          <div v-if="useDismesso(tags)" class="text-neutral-content pr-2">
            {{ useTagsname(tags) }}
          </div>
          <div v-else class="text-primary font-bold pr-2">
            {{ useTagsname(tags) }}
          </div>
          <div class="pr-2">
            <span v-if="tags['addr:place']">
              {{ poi.tags["addr:place"] }}&nbsp;
            </span>
            <span v-if="poi.tags['addr:district']">
              {{ poi.tags["addr:district"] }}&nbsp;
            </span>
            <OsnStreetNum :tags="tags" />
          </div>
          <div class="text-accent pr-2">
            <OsnCitta :tags="tags" />
          </div>
        </div>
      </OnwXbtindicator>
    </NuxtLink>
  </div>
</template>
