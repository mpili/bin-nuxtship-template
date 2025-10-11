<script setup>
defineProps(["data"]);
</script>
<template>
  <NuxtLink :to="`/regione/${data.id}`">
    <UiCard
    :title="useTagsnameit(data.tags)"
		:imageSrc="'/img/regione/' + data.id + '.png'"
	/>
  </NuxtLink>
</template>
