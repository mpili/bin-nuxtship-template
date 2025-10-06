<script setup>
const props = defineProps(["operator"]);
</script>

<template>
  <OsnTaglink v-if="operator" tag="operator" :valore="operator">
    <template v-slot:testo>
      <OnwTag
        v-if="operator"
        icona="guidance:office-pod"
        etichetta="Operatore"
        :testo="operator"
      />
    </template>
  </OsnTaglink>
</template>
