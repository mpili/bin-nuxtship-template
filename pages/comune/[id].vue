
<script setup>
const { id } = useRoute().params;

const breadcrumb = computed(() => [
  {
    label: "Regioni",
    path: "/regioni",
  },
]);

definePageMeta({
  layout: "main",
});

</script>
<template>
	<LandingContainer>
		<LandingBreadcrumb :voci="breadcrumb" />
      <ComuneDati :id="id" />
		  <!-- <ComunePois :id="id" /> -->
	</LandingContainer>
</template>
