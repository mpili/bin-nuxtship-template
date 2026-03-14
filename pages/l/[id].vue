<script setup>

const { id }  = useRoute().params;
const url_api  = `/data/localita/${id}.json`;
const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false
});

const isLoading = computed(() => (process.server ? true : pending.value));

definePageMeta({
  layout: "main",
});

</script>

<template>
  <LandingContainer>
    <div v-if="isLoading">
      <UiSkeleton />
    </div>
    <div v-else>
      <LocalitaPage :id="id" :data="data" />
    </div>
    <LandingDisclaimer />
    <MainRivelaerrori v-if="error" :error="error" />
  </LandingContainer>
</template>
