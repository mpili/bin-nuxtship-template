<script setup>
const props = defineProps(["tag", "value", "data"]);

const breadcrumb = computed(() => {
  const title = props.data?.items?.[0]?.titolo || "PSP";
  return [
    {
      label: "psp",
      path: "/psp",
    },
    {
      label: title,
    },
  ];
});
</script>
<template>
  <div v-if="Array.isArray(data?.items) && data.items.length > 0">
    <div v-for="item in data.items" :key="item.id || item.titolo">
      <LandingSectionhead>
        <template v-slot:title>{{ item.titolo }}</template>
        <template v-slot:desc>Sistema di pagamento bitcoin</template>
      </LandingSectionhead>

      <LandingBreadcrumb :voci="breadcrumb" />

      <NuxtImg
        v-if="tag === 'psp'"
        :src="'/img/psp/' + value + '.svg'"
        class="my-8 rounded-lg shadow-lg m-4 p-4"
      />

      <div v-if="item.descrizione" class="mt-8" v-html="item.descrizione"></div>

      <div class="flex my-4">
        <OsnTagwebsite v-if="item.sitoweb" :url="item.sitoweb" />
      </div>
    </div>
  </div>
</template>
