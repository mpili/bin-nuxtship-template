<script setup>
import { computed } from "vue";

const props = defineProps(["datapois"]);

// Compute grouped POIs
const groupedPois = computed(() => {
  const grouped = props.datapois.reduce((acc, poi) => {
    // Get amenity tag or use 'other' as default category
    var categoria;

    const tagsPriority = [
      "amenity",
      "leisure",
      "shop",
      "office",
      "tourism",
      "healthcare",
      "craft",
      "industrial",
      "club",
    ];

    for (const tag of tagsPriority) {
      if (poi?.tags) {
        if (poi.tags[tag]) {
          categoria = useTagtraduciit(tag, poi.tags[tag]);
          break;
        }
      }
    }

    if (!categoria) {
      categoria = "Altro";
    }

    // Initialize array for this categoria if it doesn't exist
    if (!acc[categoria]) {
      acc[categoria] = [];
    }

    // Add POI to its categoria group
    acc[categoria].push(poi);

    return acc;
  }, {});

  // Sort categoria groups alphabetically
  return Object.keys(grouped)
    .sort()
    .reduce((acc, key) => {
      acc[key] = grouped[key];
      return acc;
    }, {});
});
</script>

<template>
  <section v-if="datapois.length > 0" class="py-1 bg-blueGray-50">
    <div class="mt-6">
      <!-- Iterate over categoria groups -->
      <div
        v-for="(pois, categoria) in groupedPois"
        :key="categoria"
        class="mb-4"
      >
        <!-- Display categoria category -->
        <h3 class="text-lg font-semibold capitalize mb-2">
          {{ categoria }}
        </h3>
        <!-- Display POIs in this category -->
        <div v-for="poi in pois" :key="poi.id">
          <OsnLinelink :poi="poi" />
        </div>
      </div>
    </div>
  </section>
</template>
