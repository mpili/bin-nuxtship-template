<script setup>
const props = defineProps(["datapois"]);

const sortedPois = computed(() =>
  [...props.datapois].sort((a, b) => {
    const nameA = a.tags?.name?.toLowerCase() || "";
    const nameB = b.tags?.name?.toLowerCase() || "";
    return nameA.localeCompare(nameB);
  })
);
</script>
<template>
  <ul class="list bg-base-100 rounded-box shadow-md">
    <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Lista merchant</li>

    <li
      class="list-row"
      v-for="poi in sortedPois"
      :key="poi.id"
    >
      <OnwPoislistadli :poi="poi" />
    </li>
  </ul>
</template>
