<script setup>
defineProps(["data"]);
</script>
<template>
  <NuxtLink :to="`/regione/${data.slug}`">
    <UiCard
    :title="data.name"
		:imageSrc="'/img/regione/' + data.id + '.png'"
	/>
  </NuxtLink>
</template>
