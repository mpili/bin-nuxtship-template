<script setup>
import { computed } from 'vue';

const props = defineProps(["data"]);

const telegramList = computed(() => {
  if (!props.data?.telegram || !Array.isArray(props.data.telegram)) {
    return [];
  }
  return props.data.telegram.filter(t => t && t.telegram);
});
</script>

<template>
  <div v-if="telegramList.length > 0" class="border-1 my-2 rounded shadow p-4">
    <h2 class="text-xl">
      <NuxtLink to="/meetups"> Meetup </NuxtLink>
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-xl font-bold">
      <div v-for="t in telegramList" :key="t.telegram" class="py-2">
        <MeetupBadge :idcomunita="t.telegram" />
      </div>
    </div>
  </div>
</template>
