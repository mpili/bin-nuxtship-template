<script setup>
const isDev = process.dev;

useHead({
  title: "Bitcoin Italia Network",
});

definePageMeta({
  layout: "main",
});
</script>

<template>
  <LandingContainer>
    <MainHero></MainHero>
    <MainAdbanner v-if="isDev" />
    <LandingHeventi></LandingHeventi>
    <LandingSlide></LandingSlide>
    <LandingSlogan></LandingSlogan>
    <LandingFeatures></LandingFeatures>
    <LandingCta></LandingCta>
  </LandingContainer>
</template>
