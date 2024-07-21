<script setup>
const props = defineProps(["eventi"]);
</script>

<template>
  <div v-for="evento of eventi" class="py-2 text-xl text-blue-700">
    <NuxtLink :to="`/evento/${evento.id}`">
      <div class="flex gap-4">
        <Icon name="material-symbols:calendar-month" size="48" color="gray" />
        <span class="pt-3">
          {{ evento.titolo }}
        </span>
      </div>
    </NuxtLink>
  </div>
</template>
