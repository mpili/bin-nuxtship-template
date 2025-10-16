<script setup>
defineProps(["data"]);
</script>
<template>
  <NuxtLink :to="`/provincia/${useSlugify(useTagsnameit(data.tags))}`">
    <UiCard
    :title="useTagsnameit(data.tags)"
		:imageSrc="'https://unsplash.it/640/400?' + data.id"
	/>
  </NuxtLink>
</template>
