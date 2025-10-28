<script setup>
const props = defineProps(["citta"]);
const comuneid = useComuneid(props.citta);
</script>
<template>
    <span v-if="comuneid">
      <ComuneLink :nome="citta" class="text-primary font-bold">
        {{ citta }}
      </ComuneLink>
    </span>
    <span v-else>
      {{ citta }}
    </span>
</template>
