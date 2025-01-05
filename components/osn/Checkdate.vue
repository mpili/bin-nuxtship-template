<script setup>
const props = defineProps(["tags"]);
</script>
<template>
  <div v-if="tags['check_date']">
    <div class="flex items-center gap-1 my-2">
      <Icon
        name="material-symbols:event-available-outline"
        size="16"
        color="gray"
      />
      <span class="text-gray-300 text-sm w-48">Data di verifica&nbsp;</span>
      <span class="text-gray-300 text-sm">{{ tags["check_date"] }}</span>
    </div>
  </div>
  <div v-else-if="tags['survey:date']">
    <div class="flex items-center gap-1 my-2">
      <Icon name="material-symbols:event-available" size="16" color="gray" />
      <span class="text-gray-300 text-sm w-48">Data di verifica&nbsp;</span>
      <span class="text-gray-300 text-sm">{{ tags["survey:date"] }}</span>
    </div>
  </div>
</template>
