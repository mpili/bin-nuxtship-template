<script setup>
const props = defineProps(["dbpending", "dbdata", "dberror"]);
</script>
<template>
  <a
    v-if="!dbpending && dbdata?.items[0]?.bing"
    :href="dbdata?.items[0]?.bing"
    target="_blank"
    rel="noopener"
  >
    <div class="tooltip tooltip-left" data-tip="bing maps">
      <button class="btn btn-lg btn-circle">
        <Icon name="logos:bing" size="24" />
      </button>
    </div>
  </a>
</template>
