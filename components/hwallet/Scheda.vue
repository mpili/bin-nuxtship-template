<script setup>
defineProps(["data"]);

import hwAttributi from "~/assets/data/hw-attributi.json";

</script>

<template>
  <div v-if="data" class="flex">
    <div class="py-2 pr-4 w-48">
      <NuxtLink :to="'/hw/'+data.id" class="text-blue-600">
        {{ data.nome }}
      </NuxtLink>
    </div>
    <div class="flex flex-wrap m-1 py-2">
      <span v-for="attr of hwAttributi">
        <Icon v-if="data[attr.nome]" :name="attr.icona" size="16" :color="attr.colore" />
        <Icon v-else :name="attr.icona" size="16" color="#eee" />
      </span>
    </div>
  </div>
</template>
