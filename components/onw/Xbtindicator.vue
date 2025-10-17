<script setup>
defineProps({
  tags: {
    type: Object,
    required: true,
    default: () => ({})
  }
});
</script>
<template>
  <div class="indicator">
    <span
      v-if="tags['currency:XBT'] === 'yes'"
      class="indicator-item indicator-start status status-warning"
    ></span>
    <slot></slot> <!-- Qui va il content passato dall'esterno -->
  </div>
</template>

