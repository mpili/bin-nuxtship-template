<script setup>
const props = defineProps(["id"]);
</script>
<template>
  <button class="btn btn-lg btn-circle">
    <a :href="'https://www.openstreetmap.org/node/' + id" target="_blank">
    <div class="tooltip tooltip-left" data-tip="openstreetmap">
      <button class="btn btn-lg btn-circle">
		<Icon name="openmoji:openstreetmap" size="24" />
	  </button>
    </div>
    </a>
  </button>
</template>
