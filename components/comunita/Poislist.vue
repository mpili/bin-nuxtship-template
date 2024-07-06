<script setup>
defineProps(["data"]);
</script>

<template>
  <section v-if="data.poi.length > 0" class="py-1 bg-blueGray-50">
    <div class="mt-6">
      <div v-for="poi of data.poi" :poi="poi" class="" >
        <NuxtLink :to="'/osn/' + poi.id">
          <div class="flex flex-wrap p-2 border-2 my-2 rounded-lg shadow">
            <div class="text-blue-700 font-bold pr-2">
              {{ poi.tags.name }}
            </div>
            <div class="text-gray-400 pr-2">
              <span v-if="poi.tags['addr:city']">{{
                poi.tags["addr:city"]
              }}</span>
            </div>
            <div class="pr-2">
              {{ poi.tags["addr:street"]
              }}<span v-if="poi.tags['addr:housenumber']"
                >, {{ poi.tags["addr:housenumber"] }}</span
              >
            </div>
            <div class="text-gray-400">
              <OsnTipovenue :tags="poi.tags" />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>