<script setup>
const props = defineProps(["data"]);

const breadcrumb = computed(() => [
  {
    label: "comunità",
    path: "/comunita",
  },
  {
    label: props.data.name,
  },
]);
</script>
<template>
  <!-- <UiRivela title="dati" :description="data" /> -->

  <LocalitaMetatag :data="data" />
  <LandingSectionhead>
    <template v-slot:title>{{ data.name }}</template>
  </LandingSectionhead>
  <div class="grid place-items-center pt-4">
    <NuxtImg
      :src="`/img/l/${data?.id}.jpg`"
      format="webp"
      class="aspect-square max-h-96 rounded-md"
    />
  </div>
  <LocalitaBreadcrumb v-if="data?.idcomune" :idcomune="data.idcomune" />
  <!-- <LandingBreadcrumb v-else :voci="breadcrumb" /> -->
</template>
