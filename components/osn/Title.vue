<script setup>
const props = defineProps(["data"]);
const title = `${useTagsname(props?.data?.tags)} | Bitcoin Italia Network`;
const description = `Da ${props?.data?.name} puoi acquistare pagando in bitcoin.`;

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: `https://api.btcmap.org/og/element/node:${props?.data?.id}`,
  twitterCard: 'summary_large_image',
});
</script>

