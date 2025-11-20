<script setup>
const props = defineProps(["data"]);
const title = `regione ${props?.data?.name} | Bitcoin Italia Network`;
const description = `La pagina della regione ${props?.data?.name} con gli eventi e l'elenco delle sue province.`;

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: "https://bitcoinitalianetwork.com/img/regione/" + props.data.id + ".png",
  twitterCard: 'summary_large_image',
});
</script>

