<script setup>
const featured_ids = [3217327590, 150411517, 4736077722];

definePageMeta({
  layout: "main",
});
</script>

<template>
  <LandingContainer>
    <OsnFeatured :ids="featured_ids" />
  </LandingContainer>
</template>
