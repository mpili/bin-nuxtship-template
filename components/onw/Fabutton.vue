<script setup>
const props = defineProps(["url", "icon", "tooltip"]);
</script>
<template>
  <a
    v-if="url"
    :href="url"
    target="_blank"
    rel="noopener"
  >
    <div class="tooltip tooltip-left" :data-tip="tooltip">
      <button class="btn btn-lg btn-circle">
        <Icon :name="icon" size="24" />
      </button>
    </div>
  </a>
</template>
