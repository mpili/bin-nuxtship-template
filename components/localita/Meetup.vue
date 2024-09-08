<script setup>
defineProps(["data"]);
</script>

<template>
  <div v-if="data.telegram" class="border-1 my-2 rounded shadow p-4">
    <h2 class="text-xl">
      <NuxtLink to="/meetups"> Meetup </NuxtLink>
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-xl font-bold">
      <div v-for="t in data.telegram" class="py-2">
        <NuxtLink :href="`/c/${t.telegram}`" class="text-blue-500">
          <div class="flex items-center rounded-full border shadow gap-6 p-2">
          <NuxtImg :src="`/img/c/${t.telegram}.jpeg`" :alt="t.telegram" class="inline-block relative object-cover object-center !rounded-full w-20 h-20 rounded-lg" />
          {{ t.telegram }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>