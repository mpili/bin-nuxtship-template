<script setup>
const isDev = process.dev;

useHead({
  title: "banner - Bitcoin Italia Network",
});

definePageMeta({
  layout: "main",
});
</script>

<template>
  <LandingContainer>
    <MainHero></MainHero>
    <MainAdbanner />
    <LandingHeventi></LandingHeventi>
    <LandingSlide></LandingSlide>
    <LandingSlogan></LandingSlogan>
    <LandingFeatures></LandingFeatures>
    <!-- <LandingCta></LandingCta> -->
  </LandingContainer>
</template>
