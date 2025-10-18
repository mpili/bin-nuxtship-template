<script setup>
defineProps({
  tags: {
    type: Object,
    required: true,
    default: () => ({})
  }
});
</script>
<template>
	<NuxtLink :to="`/provincia/${useSlugify(useTagsnameit(tags))}`">
		<slot></slot>
	</NuxtLink>
</template>
