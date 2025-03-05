<script setup>
import sanitize from "sanitize-filename";
const props = defineProps(["tagvalue"]);


const url_api = `/data/ostfeatured/${props.tagvalue}.json`;

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});
</script>
<template>
  <div>
    <div v-if="pending"></div>
    <div v-else>
      <OsnFeatured v-if="data?.length" :data="data" />
    </div>
  </div>
</template>
