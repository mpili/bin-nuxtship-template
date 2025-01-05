<script setup>
const props = defineProps(["data"]);
useHead({
  title: props?.data?.tags?.name + " | Bitcoin Italia Network",
  link: [
    {
      rel: "canonical",
      href: `https://bitcoinitalianetwork.com/osw/${props?.data?.id}`,
    },
  ],
});

const url_api = `https://bin-dev.pockethost.io/api/collections/attivita/records?filter=(id_nod_osm='${props?.data?.id}')`;
const {
  pending,
  data: dbdata,
  error,
} = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});
</script>

<template>
  <div v-if="data">
    <!-- {{ data }} -->
    <div v-if="data.tags">
      
      <LandingSectionhead>
        <template v-slot:title>{{ data?.tags?.name }}</template>
        <template v-slot:desc><OsnTipovenue :tags="data?.tags" /></template>
      </LandingSectionhead>

      <OsnImmagine :pending="pending" :dbdata="dbdata" />

      <div v-if="data?.tags?.description" class="pb-4">
        {{ data?.tags?.description }}
      </div>

      <div v-if="data?.tags">
        <OsnTagsgroupone :data="data" />
      </div>

      <OsnDescrizione :pending="pending" :dbdata="dbdata" />

      <div v-if="data?.tags">
        <OsnTagwebsites :tags="data?.tags" />
        <OsnTagemails :tags="data?.tags" />
        <OsnSocials :tags="data.tags" :dbdata="dbdata" :pending="pending" />
      </div>

      <OsnXtagsx :idnodosm="data?.id" />

      <!-- <OswMap :data="data" /> -->

      <OsnXmaps :data="data" :pending="pending" :dbdata="dbdata" />

      <OswOsmbtcmap :data="data" />

      <div v-if="data?.tags">
        <OsnCheckdate :tags="data.tags" />
      </div>      

    </div><!-- v if data.tags -->
  </div><!-- v if data -->
</template>
