<script setup>
defineProps(["data"]);
</script>

<template>
  <div v-if="data" class="p-5 bg-gray-100 rounded-lg my-4">
    <NuxtLink :to="'/meetup/' + data.idmeetup" class="text-blue-600">
      {{ data.nome }}
    </NuxtLink>
  </div>
</template>
