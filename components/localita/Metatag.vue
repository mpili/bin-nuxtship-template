<script setup>
const props = defineProps(["data"]);

useHead({
  title: props?.data?.name + " | Bitcoin Italia Network",
  link: [
    {
      rel: "canonical",
      href: `https://bitcoinitalianetwork.com/l/${props?.data?.id}`,
    },
  ],
  meta: [
    {
      property: "og:image",
      content:
        "https://bitcoinitalianetwork.com/img/l/" + props.data.id + ".jpg",
    },
  ],
});

</script>
<template>
	<!-- <UiRivela title="dati" :description="data" /> -->
   <span></span>
</template>