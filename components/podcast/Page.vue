<script setup>
const props = defineProps(["podc"]);

const breadcrumb = computed(() => [
  {
    label: "podcast",
    path: "/podcast",
  },
  {
    label: props.podc.nome,
  },
]);

useHead({
  title: props.podc.nome + " | Bitcoin Italia Network",
  meta: [
    {
      name: "description",
      content:
        "Il podcast " + props.podc.nome + " che parla di Bitcoin in Italiano.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://bitcoinitalianetwork.com/podc/${props?.podc?.id}`,
    },
  ],
});
</script>

<template>
  <div>
    <LandingSectionhead>
      <template v-slot:title>
        {{ podc.nome }}
      </template>
    </LandingSectionhead>
    <LandingBreadcrumb :voci="breadcrumb" />
    <div
      class="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md"
    >
      <div class="flex-none w-48 pb-4 relative">
        <NuxtImg
          :src="podc.img"
          format="webp"
          class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
        />
      </div>
      
      <!-- Description section -->
      <div v-if="podc.descrizione" class="mb-6">
        <p class="text-gray-700">{{ podc.descrizione }}</p>
      </div>

      <OsnTagwebsite
        v-if="podc.sito"
        :url="podc.sito"
      />

      <PodcastApps :podcapps="podc.apps" />
    </div>
  </div>
</template>
