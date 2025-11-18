<script setup>
const props = defineProps(["data"]);
const title = `provincia di ${props?.data?.name} | Bitcoin Italia Network`;
const description = `La pagina della provincia di ${props?.data?.name} con l'elenco dei suoi comuni.`;

useHead({
  link: [
    {
      rel: "canonical",
      href: `https://bitcoinitalianetwork.com/provincia/${props?.data?.slug}`,
    },
  ],
});

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  // ogImage: "https://bitcoinitalianetwork.com/img/regione/" + props.data.id + ".png",
  // twitterCard: 'summary_large_image',
});
</script>
