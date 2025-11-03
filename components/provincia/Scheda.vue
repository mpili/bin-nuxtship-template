<script setup>
const props = defineProps(["data"]);
const urlimg = useProvinceimgurl(useTagsnameit(props.data.tags));
</script>
<template>
  <NuxtLink :to="`/comune/${data.id}`">
    <UiCard
    :title="useTagsnameit(data.tags)"
		:imageSrc="useProvinceimgurl(useTagsnameit(data.tags))"
	/>
  </NuxtLink>
</template>
