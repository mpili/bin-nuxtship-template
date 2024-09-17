<script setup>
const props = defineProps(["hwallet"]);

const breadcrumb = computed(() => [
  {
    label: "hardware wallet",
    path: "/hwallet",
  },
  {
    label: props.hwallet.nome,
  },
]);

import hwAttributi from "~/assets/data/hw-attributi.json";

const hw_img =
  "https://bin-dev.pockethost.io/api/files/hardwarewallet/" +
  props.hwallet.id +
  "/" +
  props.hwallet.featuredImage;

useHead({
  title: props?.hwallet?.name + " | Bitcoin Italia Network",
  link: [
    {
      rel: "canonical",
      href: `https://bitcoinitalianetwork.com/hw/${props?.hwallet?.id}`,
    },
  ],
  meta: [
    {
      property: "og:image",
      content: hw_img,
    },
  ],
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>{{ props.hwallet.nome }}</template>
      <template v-slot:desc>Hardware wallet</template>
    </LandingSectionhead>
    <LandingBreadcrumb :voci="breadcrumb" />

    <div class="m-8">
      <img
        :src="hw_img"
        class="transition-transform transform hover:scale-125"
        width="128"
      />
    </div>

    <div v-for="attr of hwAttributi">
      <div v-if="props.hwallet[attr.nome]" class="flex gap-4">
        <Icon :name="attr.icona" size="16" :color="attr.colore" />
        {{ attr.nome }}
      </div>
    </div>
    <div class="flex flex-wrap gap-4 mt-4">
      <OsnTagwebsite :url="hwallet.sitoweb" />
    </div>
    <div v-if="hwallet.descrizione">
      <div v-html="hwallet.descrizione" class="pt-4"></div>
    </div>
  </LandingContainer>
</template>
