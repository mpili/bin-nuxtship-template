<script setup>
defineProps(["data"]);
</script>
<template>
  <NuxtLink :to="`/comune/${data.id}`">
    <UiCard
    :title="useTagsnameit(data.tags)"
		:imageSrc="'https://unsplash.it/640/400?' + data.id"
	/>
  </NuxtLink>
</template>
