<script setup>
const props = defineProps(["data","dbpending", "dbdata", "dberror"]);

useHead({
  title: useTagsname(props?.data?.tags) + " | Bitcoin Italia Network",
  link: [
    {
      rel: "canonical",
      href: `https://bitcoinitalianetwork.com/osw/${props?.data?.id}`,
    },
  ],
  meta: [
    { property: "og:title", content: useTagsname(props?.data?.tags) },
    { property: "keywords", content: "bitcoin,merchant" },
    {
      property: "og:image",
      content: `https://api.btcmap.org/og/element/node:${props?.data?.id}`,
    },
    { property: "author", content: "Bitcoin Italia Network" },
    { property: "og:type", content: "website" },
    {
      property: "description",
      content: "Gli esercenti che accettano pagamenti in Bitcoin in Italia",
    },
    { property: "og:url", content: `https://bitcoinitalianetwork.com/osw/${props?.data?.id}` },
  ],
});

// const url_api = `https://bin-dev.pockethost.io/api/collections/attivita/records?filter=(id_nod_osm='${props?.data?.id}')`;
// const {
//   pending,
//   data: dbdata,
//   error,
// } = await useLazyFetch(url_api, {
//   lazy: true,
//   server: false,
// });
</script>

<template>
  <div v-if="data">
    <div v-if="data.tags">
      <LandingSectionhead>
        <template v-slot:title>{{ useTagsname(data?.tags) }}</template>
        <template v-slot:desc><OsnTipovenue :tags="data?.tags" /></template>
      </LandingSectionhead>

      <OnwImmagine :pending="pending" :dbdata="dbdata" />
      <OnwTagimage :tags="data?.tags" />

      <div v-if="data?.tags?.description" class="pb-4">
        {{ data?.tags?.description }}
      </div>

      <div v-if="data?.tags">
        <OswEventi :idwayosm="data?.id" />
        <OnwTagsgroupone :data="data" />
      </div>

      <OnwDescrizione :pending="pending" :dbdata="dbdata" />

      <div v-if="data?.tags">
        <OsnTagwebsites :tags="data?.tags" />
        <OsnTagemails :tags="data?.tags" />
        <OsnSocials :tags="data.tags" :dbdata="dbdata" :pending="pending" />
      </div>

      <OsnXtagsx :idnodosm="data?.id" />

      <OswMap :idosm="data?.id" />
      <OsnXmaps :data="data" :pending="pending" :dbdata="dbdata" />

      <OswOsmbtcmap :data="data" />

      <div v-if="data?.tags">
        <OsnCheckdate :tags="data.tags" />
      </div>      

    </div><!-- v if data.tags -->
  </div><!-- v if data -->
</template>
