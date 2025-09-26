<script setup>
const props = defineProps(["data"]);
</script>
<template>
  <div class="card bg-base-100 w-96 shadow-xl">
    <div class="card-body">
      <NuxtLink :to="`/osn/${data.id}`">
        <h2 class="card-title">{{ data.tags.name }}</h2>
        <OsnIndirizzo :data="data" />
      </NuxtLink>
    </div>
    <OsnMap :data="data" />
  </div>
</template>
