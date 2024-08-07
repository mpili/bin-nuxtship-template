<script setup>
defineProps(["data"]);
</script>

<template>
  <div v-if="data.telegram" class="border-1 my-2 rounded shadow p-4">
    <h2 class="text-xl">
      <NuxtLink to="/meetups"> Meetup </NuxtLink>
    </h2>
    <div>
      <div v-for="t in data.telegram" class="py-2">
        <NuxtLink :href="`/c/${t.telegram}`" class="text-blue-500">
          {{ t.telegram }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>