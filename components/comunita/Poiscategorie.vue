<script setup>
import { computed } from "vue";

const props = defineProps(["datapois"]);

// Compute grouped POIs
const groupedPois = computed(() => {
  const grouped = props.datapois.reduce((acc, poi) => {
    // Get amenity tag or use 'other' as default category
    var categoria;

    categoria = useTipovenue(poi.tags);

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
      class="collapse collapse-arrow"
    >
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title text-xl font-medium">
        <div class="indicator">
          <span class="indicator-item badge badge-primary">{{pois.length}}</span>
          <button class="btn">{{ categoria }}</button>
        </div>
      </div>
      <div class="collapse-content">
        <div v-for="poi in pois" :key="poi.id" class="rounded">
          <OsnLinelink :poi="poi" />
        </div>
      </div>
    </div>
  </section>
</template>
