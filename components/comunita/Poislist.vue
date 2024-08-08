<script setup>
defineProps(["data"]);
</script>

<template>
  <section v-if="data.poi.length > 0" class="py-1 bg-blueGray-50">
    <div class="mt-6">
      <div v-for="poi of data.poi" :poi="poi">
        <OsnLinelink :poi="poi" />
      </div>
    </div>
  </section>
</template>
