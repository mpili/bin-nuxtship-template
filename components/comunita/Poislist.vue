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
  <section v-if="datapois.length > 0" class="py-4 space-y-2">
    <div
      v-for="(pois, categoria) in groupedPois"
      :key="categoria"
      class="collapse collapse-arrow bg-base-200"
    >
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title text-xl font-medium">
        {{ categoria }}
      </div>
      <div class="collapse-content">
        <div v-for="poi in pois" :key="poi.id" class="bg-white rounded">
          <OsnLinelink :poi="poi" />
        </div>
      </div>
    </div>
  </section>
</template>
