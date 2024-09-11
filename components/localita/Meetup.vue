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
        <MeetupBadge v-if="t.telegram" :idcomunita="t.telegram" />
      </div>
    </div>
  </div>
</template>
