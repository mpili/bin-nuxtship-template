<script setup>

useHead({
  title: 'Bitcoin Italia Network',
});

definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingHero></LandingHero>

    <LandingHeventi></LandingHeventi>
    <LandingSlide></LandingSlide>
    <LandingSlogan></LandingSlogan>
    <LandingFeatures></LandingFeatures>
    <LandingCta></LandingCta>
  </LandingContainer>
</template>