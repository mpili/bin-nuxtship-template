<script setup>
const props = defineProps(["data","dbpending", "dbdata", "dberror"]);

useHead({
  title: useTagsname(props?.data?.tags) + " | Bitcoin Italia Network",
  link: [
    {
      rel: "canonical",
      href: `https://bitcoinitalianetwork.com/osn/${props?.data?.id}`,
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
    { property: "og:url", content: `https://bitcoinitalianetwork.com/osn/${props?.data?.id}` },
  ],
});

// const db_url_api = `https://bin-dev.pockethost.io/api/collections/attivita/records?filter=(id_nod_osm='${props?.data?.id}')`;
// const {
//   pending: dbpending,
//   data: dbdata,
//   error: dberror,
// } = await useLazyFetch(db_url_api, {
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

      <OnwImmagine :pending="dbpending" :dbdata="dbdata" />
      <OnwTagimage :tags="data?.tags" />
      <!-- <WikidataLogo :data="data" /> -->

      <div v-if="data?.tags?.description" class="pb-4">
        {{ data?.tags?.description }}
      </div>

      <div v-if="data?.tags">
        <OsnEventi :idnodosm="data?.id" />
        <OnwTagsgroupone :data="data" />
      </div>

      <OnwDescrizione :pending="dbpending" :dbdata="dbdata" />

      <div v-if="data?.tags">
        <OsnTagwebsites :tags="data?.tags" />
        <OsnTagemails :tags="data?.tags" />
        <OsnSocials :tags="data.tags" :dbdata="dbdata" :pending="dbpending" />
      </div>

      <OsnXtagsx :idnodosm="data?.id" />

      <OsnMap :data="data" />
      <OsnXmaps :data="data" :pending="dbpending" :dbdata="dbdata" />

      <OsnOsmbtcmap :data="data" />

      <div v-if="data?.tags">
        <OsnCheckdate :tags="data.tags" />
      </div>
      
    </div><!-- v if data.tags -->
  </div><!-- v if data -->
</template>
