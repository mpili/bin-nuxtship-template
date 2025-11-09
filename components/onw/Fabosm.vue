<script setup>
import { computed } from 'vue';

const props = defineProps({
  id: [String, Number],
  type: String
});

const segment = computed(() => {
  if (props.type === 'w') return 'way';
  if (props.type === 'r') return 'relation';
  return 'node';
});

const href = computed(() => `https://www.openstreetmap.org/${segment.value}/${props.id}`);
</script>

<template>
  <OnwFabutton
    :url="href"
    icon="openmoji:openstreetmap"
    tooltip="openstreetmap"
  />
</template>
