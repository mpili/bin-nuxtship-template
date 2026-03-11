<script setup>
import { computed, watch } from 'vue';

const props = defineProps(["data"]);

const localitaName = computed(() => props.data?.name || "Località");
const localitaId = computed(() => props.data?.id || "");

watch(
  () => props.data,
  (newData) => {
    if (!newData) return;
    useHead({
      title: `${localitaName.value} | Bitcoin Italia Network`,
      link: [
        {
          rel: "canonical",
          href: `https://bitcoinitalianetwork.com/l/${localitaId.value}`,
        },
      ],
      meta: [
        {
          property: "og:image",
          content:
            localitaId.value
              ? `https://bitcoinitalianetwork.com/img/l/${localitaId.value}.jpg`
              : "https://bitcoinitalianetwork.com/img/l/default.jpg",
        },
      ],
    });
  },
  { immediate: true }
);

</script>
<template>
	<!-- <UiRivela title="dati" :description="data" /> -->
   <span></span>
</template>