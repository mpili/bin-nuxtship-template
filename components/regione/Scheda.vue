<script setup>
defineProps(["data"]);
</script>
<template>
  <NuxtLink :to="`/provincia/${useSlugify(data.tags.name)}`">
    <UiCard
    :title="useTagsnameit(data.tags)"
		:imageSrc="'https://unsplash.it/640/400?' + data.id"
	/>
  </NuxtLink>
</template>
