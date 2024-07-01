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
</script>

<template>
  <div>
    <LandingSectionhead>
      <template v-slot:title>
        {{ podc.nome }}
      </template>
      <template v-slot:desc>bitcoin wallet</template>
    </LandingSectionhead>
    <LandingBreadcrumb :voci="breadcrumb" />
    <div
      class="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md"
    >
      <div class="flex-none w-48 relative">
        <img
          :src="podc.img"
          width="400"
          height="580"
          format="avif"
          alt="dove"
          class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
        />
      </div>
      <PodcastApps :podcapps="podc.apps" />
    </div>
  </div>
</template>
