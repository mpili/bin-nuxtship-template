<script setup>
const props = defineProps(["dbpending", "dbdata", "dberror"]);
</script>
<template>
  <a
    v-if="!dbpending && dbdata?.items[0]?.gmap"
    :href="dbdata?.items[0]?.gmap"
    target="_blank"
    rel="noopener"
  >
    <div class="tooltip tooltip-left" data-tip="google maps">
      <button class="btn btn-lg btn-circle"><Icon name="logos:google-maps" size="24" /></button>
    </div>
  </a>
</template>
