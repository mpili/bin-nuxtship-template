<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
	<LandingContainer>
		<LandingSectionhead>
      <template v-slot:title>Comunità Bitcoin in Italia</template>
      <template v-slot:desc>Le comunità di Bitcoiner sul territorio italiano.</template>
    </LandingSectionhead>
	<div>
		<LandingIframapas></LandingIframapas>
	</div>
	</LandingContainer>
</template>
