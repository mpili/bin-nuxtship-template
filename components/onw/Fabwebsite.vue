<script setup>
const props = defineProps(["oppending", "opdata", "operror"]);
</script>
<template>
  <a
    v-if="!oppending && useTagswebsite(opdata.elements[0].tags)"
    :href="useTagswebsite(opdata.elements[0].tags)"
    target="_blank"
    rel="noopener"
  >
    <div class="tooltip tooltip-left" data-tip="sito web">
      <button class="btn btn-lg btn-circle">
        <Icon name="streamline-freehand-color:worldwide-web-network-www" size="24" />
      </button>
    </div>
  </a>
</template>
