
<script setup>
const { id } = useRoute().params;

definePageMeta({
  layout: "main",
});

</script>
<template>
	<LandingContainer>
    <ComunePage :id="id" />

	</LandingContainer>
</template>
