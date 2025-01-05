<script setup>
const props = defineProps(["tags"]);
</script>
<template>
  <div class="flex">
    <OsnTagwebsite v-if="tags?.website" :url="tags?.website" />
    <OsnTagwebsite
      v-if="tags['contact:website']"
      :url="tags['contact:website']"
    />
  </div>
</template>