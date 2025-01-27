<script setup>
defineProps(["data"]);
</script>
<template>
  <NuxtLink :to="data.url">
    <UiCard
		:title="data.nome"
		:buttonText="data.nome"
		:imageSrc="data.img"
	/>
  </NuxtLink>
</template>
