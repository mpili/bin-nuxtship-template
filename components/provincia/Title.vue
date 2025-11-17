<script setup>
const props = defineProps(["data"]);

useHead({
  title: props?.data?.name + " | Bitcoin Italia Network",
  link: [
    {
      rel: "canonical",
      href: `https://bitcoinitalianetwork.com/provincia/${props?.data?.slug}`,
    },
  ],
  // meta: [
  //   {
  //     property: "og:image",
  //     content:
  //       "https://bitcoinitalianetwork.com/img/regione/" + props.data.id + ".png",
  //   },
  // ],
});
</script>
