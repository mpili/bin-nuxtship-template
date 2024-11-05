<script setup>
defineProps(["poi"]);
</script>

<template>
  <NuxtLink :to="'/osn/' + poi.id">
    <div v-if="poi?.tags" class="flex flex-wrap p-2 border-1 my-2 rounded shadow">
      <div class="text-blue-700 font-bold pr-2">
        {{ poi?.tags?.name }}
      </div>
      <div class="pr-2">
        <span v-if="poi?.tags['addr:place']">
          {{ poi.tags["addr:place"] }}&nbsp;
        </span>
        <span v-if="poi.tags['addr:district']">
          {{ poi.tags["addr:district"] }}&nbsp;
        </span>
        <OsnStreetNum :tags="poi?.tags" />
      </div>
      <div class="text-gray-400 pr-2">
        <OsnCitta :tags="poi?.tags" />
      </div>
      <!-- <div class="text-gray-400">
        <OsnTipovenue :tags="poi?.tags" />
      </div> -->
    </div>
  </NuxtLink>
</template>
